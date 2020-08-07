var app = angular.module('myApp', []);
app.controller('myCtrl', function ($scope, $http) {
  $scope.adminView = false;

  // Modals
  $scope.deleteModal = false;
  $scope.bookingModal = false;
  $scope.returnModal = false;
  $scope.uploadListModal = false;
  $scope.emptyListModal = false;
  $scope.deleteTableModal = false;
  $scope.addBookModal = false;
  $scope.feesCollectedModal = false;

  updateTable();

  $scope.user = {
    userName: 'Antonella',
    id: 1,
  };


  /* 
   * Function to toggle views (admin - user).
   * I need a toggle in order to display two different views    
   */
  $scope.toggleView = function () {
    if ($scope.adminView) {
      $scope.adminView = false;
    } else {
      $scope.adminView = true;
    }
  };


  /* 
   * Function to know raiting of books (stars)
   * I need to calculate how many stars it will display in the table, 
   * because in the HTML you can not calculate the raiting.
   */
  $scope.calculateRaiting = function (reviews) {
    //0. Create a variable to display the initial value.
    var raitingValue = 0;
    var raiting = [false, false, false, false, false];
    //1. Itarate in the array.
    if (reviews) {
      for (var i = 0; i < reviews.length; i++) {
        //2. add to the inicial value.
        raitingValue = raitingValue + reviews[i].Raiting;
      }

      //3. divide by reviews.length and apply math round.
      raitingValue = Math.round(raitingValue / reviews.length);
      //4. return calculateRaiting();
      for (var i = 0; i < raitingValue; i++) {
        raiting[i] = true;
      }
    }

    return raiting;
  };


  // Confirm booking.
  $scope.confirmBooking = function () {
    updateBookConf.Inventory.data[0].search = $scope.currentBook.id;
    updateBookConf.Inventory.data[1].new = true;
    updateBookConf.Inventory.data[2].new = new Date().toString();

    var formData = 'data=' + JSON.stringify(updateBookConf);

    $http({
      url: 'db.php',
      method: "POST",
      data: formData,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }).then(function (response) {
      updateTable();
      if (response.status == 'success' || response.status == 200) {
        $scope.toggleModal('bookingModal');
      } else {
        alert('Error:' + response.data);
      }
    }, checkErrorResponse);
  };


  // Generic function to open modals.
  $scope.toggleModal = function (modalKey, book) {
    if ($scope[modalKey]) {
      $scope[modalKey] = false;
      $scope.currentBook = null;
    } else {
      $scope[modalKey] = true;
      $scope.currentBook = (book) ? Object.create(book) : null;
    }
  };


  // Create table in database.
  $scope.createTable = function () {
    var formData = 'data=' + JSON.stringify(createTableConf);
    var formDataReviews = 'data=' + JSON.stringify(createReviewsTableConf);

    //Request formDataReviews
    $http({
      url: 'db.php',
      method: "POST",
      data: formDataReviews,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }).then(checkErrorResponse, checkErrorResponse);

    // Request formData
    $http({
      url: 'db.php',
      method: "POST",
      data: formData,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }).then(function (response) {
      if (response.status == 'success' || response.status == 200) {
        $scope.toggleModal('emptyListModal');
      } else {
        alert('Error:' + response.data);
      }
    }, checkErrorResponse);
  };


  // Upload table information in the database.
  $scope.uploadList = function () {
    var formData = 'data=' + JSON.stringify(dataImportConf);

    $http({
      url: 'db.php',
      method: "POST",
      data: formData,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }).then(function (response) {
      updateTable();
      if (response.status == 'success' || response.status == 200) {
        $scope.toggleModal('uploadListModal');
      } else {
        alert('Error:' + response.data);
      }
    }, checkErrorResponse);
  };


  // Populate table with all books info.
  function updateTable() {
    var formData = 'data=' + JSON.stringify(updateTableConf);

    $http({
      url: 'db.php',
      method: "POST",
      data: formData,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }).then(function (response) {
      if ((response.status == 'success' || response.status == 200) && response.data.data) {
        $scope.Inventory = response.data.data.Inventory;
        getReviews();
      } else {
        alert('Warning: please click "Create table" and "Upload list"');
      }
    }, checkErrorResponse);
  }


  function getReviews() {
    var formData = 'data=' + JSON.stringify(getReviewsConf);

    $http({
      url: 'db.php',
      method: "POST",
      data: formData,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }).then(function (response) {
      if ((response.status == 'success' || response.status == 200) && response.data.data) {
        for (var bookI = 0; bookI < $scope.Inventory.length; bookI++) {
          var book = $scope.Inventory[bookI];
          for (var reviewI = 0; reviewI < response.data.data.Reviews.length; reviewI++) {
            var review = response.data.data.Reviews[reviewI];
            if (book.id == review.BookID) {
              if (!book.Reviews) {
                book.Reviews = [];
              }
              book.Reviews.push(review);
            }
          }
        }
      } else {
        alert('Warning: please click "Create table" and "Upload list"');
      }
    }, checkErrorResponse);
  }


  // Delete table with all books info.
  $scope.deleteTable = function () {
    var formData = 'data=' + JSON.stringify(deleteTableConf);
    var formDataReviews = 'data=' + JSON.stringify(deleteReviewsTableConf);

    $http({
      url: 'db.php',
      method: "POST",
      data: formDataReviews,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }).then(checkErrorResponse, checkErrorResponse);

    $http({
      url: 'db.php',
      method: "POST",
      data: formData,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }).then(function (response) {
      if (response.status == 'success' || response.status == 200) {
        $scope.Inventory = [];
        $scope.toggleModal('deleteTableModal');
      } else {
        alert('Error:' + response.data);
      }
    }, checkErrorResponse);
  };


  // Delete row (book)
  $scope.deleteRow = function () {
    deleteRowConf.Inventory.data[0].search = $scope.currentBook.id;
    var formData = 'data=' + JSON.stringify(deleteRowConf);

    $http({
      url: 'db.php',
      method: "POST",
      data: formData,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }).then(function (response) {
      if (response.status == 'success' || response.status == 200) {
        updateTable();
        $scope.toggleModal('deleteModal');
      } else {
        alert('Error:' + response.data);
      }
    }, checkErrorResponse);
  };


  // Add new book.
  $scope.addNewBook = function () {
    var fileFormField = $('#fileUploadFile')[0];
    var file = fileFormField.files[0];
    if (file) {
      uploadImage(file);
    }

    addNewBookConf.Inventory.data[0].new = $scope.currentBook.Title;
    addNewBookConf.Inventory.data[1].new = $scope.currentBook.Author;
    addNewBookConf.Inventory.data[2].new = $scope.currentBook.Year;
    addNewBookConf.Inventory.data[3].new = $scope.currentBook.Cat;
    addNewBookConf.Inventory.data[4].new = $scope.currentBook.Pack;
    addNewBookConf.Inventory.data[5].new = $scope.currentBook.ISBN;
    addNewBookConf.Inventory.data[6].new = file.name;

    var formData = 'data=' + JSON.stringify(addNewBookConf);

    $http({
      url: 'db.php',
      method: "POST",
      data: formData,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }).then(function (response) {
      if (response.status == 'success' || response.status == 200) {
        updateTable();
        $scope.toggleModal('addBookModal');
      } else {
        alert('Error:' + response.data);
      }
    }, checkErrorResponse);
  };


  // Modify existent book.
  $scope.modifyBook = function () {
    var fileFormField = $('#fileUploadFile')[0];
    var file = fileFormField.files[0];
    if (file) {
      uploadImage(file);
    }

    modifyBookConf.Inventory.data[0].search = $scope.currentBook.id;
    modifyBookConf.Inventory.data[1].new = $scope.currentBook.Title;
    modifyBookConf.Inventory.data[2].new = $scope.currentBook.Author;
    modifyBookConf.Inventory.data[3].new = $scope.currentBook.Year;
    modifyBookConf.Inventory.data[4].new = $scope.currentBook.Cat;
    modifyBookConf.Inventory.data[5].new = $scope.currentBook.Pack;
    modifyBookConf.Inventory.data[6].new = $scope.currentBook.ISBN;
    modifyBookConf.Inventory.data[7].new = file.name;

    var formData = 'data=' + JSON.stringify(modifyBookConf);

    $http({
      url: 'db.php',
      method: "POST",
      data: formData,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }).then(function (response) {
      if (response.status == 'success' || response.status == 200) {
        updateTable();
        $scope.toggleModal('addBookModal');
      } else {
        alert('Error:' + response.data);
      }
    }, checkErrorResponse);
  };


  // Return book.
  $scope.returnBook = function () {
    updateBookConf.Inventory.data[0].search = $scope.currentBook.id;
    updateBookConf.Inventory.data[1].new = false;
    updateBookConf.Inventory.data[2].new = null;

    var formData = 'data=' + JSON.stringify(updateBookConf);

    addNewReviewConf.Reviews.data[0].new = $scope.user.userName;
    addNewReviewConf.Reviews.data[1].new = ($scope.currentBook.Raiting) ? ($scope.currentBook.Raiting) : 0;
    addNewReviewConf.Reviews.data[2].new = $scope.currentBook.Review;
    addNewReviewConf.Reviews.data[3].new = $scope.currentBook.id;
    var formDataReview = 'data=' + JSON.stringify(addNewReviewConf);

    $http({
      url: 'db.php',
      method: "POST",
      data: formData,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }).then(checkErrorResponse, checkErrorResponse);

    $http({
      url: 'db.php',
      method: "POST",
      data: formDataReview,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }).then(function (response) {
      if (response.status == 'success' || response.status == 200) {
        updateTable();
        $scope.toggleModal('returnModal');
      } else {
        alert('Error:' + response.data);
      }
    }, checkErrorResponse);
  };


  // Calculate fee.
  $scope.calculateFee = function (date) {
    var dateRental = new Date(date);
    var currentDate = new Date();

    var diffDays = parseInt((currentDate - dateRental) / (1000 * 60 * 60 * 24), 10);

    return Math.floor(diffDays / 7) * 0.50;
  };


  // Upload image.
  function uploadImage(file) {
    uploadImageConf._file_.name = file.name;

    var dataString = JSON.stringify(uploadImageConf);
    var formData = new FormData();
    formData.append('data', dataString);

    formData.append('file', file, file.name);
    $.ajax({
      url: "db.php",
      type: 'POST',
      data: formData,
      cache: false,
      contentType: false,
      processData: false,
      success: function (data, status) {}
    });
  }


  // Sum of all fees.
  $scope.sumFees = function () {
    var total = 0;

    if (!$scope.Inventory) {
      return total;
    }

    for (var i = 0; i < $scope.Inventory.length; i++) {

      if ($scope.Inventory[i].Fees) {
        total += parseFloat($scope.Inventory[i].Fees);
      }
    }

    return total;
  };


  /* 
   * In order to not repear code I stored this logic in a function
   * and reference when need it.
   */
  function checkErrorResponse(response) {
    if (response.status != 'success' && response.status != 200) {
      alert('Error:' + response.data);
    }
  }
});