var clientTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
var apiKey = 'of3tq3y1';

var createTableConf = {
  "Inventory": {
    "apiKey": apiKey,
    "timeZone": clientTimeZone,
    "purpose": "CT",
    "debug": true,
    "sort": "n/a",
    "startVal": -1,
    "pageSize": -1,
    "data": [{
        "colName": "Title",
        "unique": false,
        "dataType": "String",
        "dataLength": 100
      },
      {
        "colName": "Author",
        "unique": false,
        "dataType": "String",
        "dataLength": 50
      },
      {
        "colName": "Year",
        "unique": false,
        "dataType": "String",
        "dataLength": 4
      },
      {
        "colName": "Cat",
        "unique": false,
        "dataType": "String",
        "dataLength": 20
      },
      {
        "colName": "Pack",
        "unique": false,
        "dataType": "String",
        "dataLength": 20
      },
      {
        "colName": "ISBN",
        "unique": false,
        "dataType": "String",
        "dataLength": 50
      },
      {
        "colName": "Image",
        "unique": false,
        "dataType": "String",
        "dataLength": 100
      },
      {
        "colName": "Booked",
        "unique": false,
        "dataType": "Boolean",
        "dataLength": 1
      },
      {
        "colName": "DateRental",
        "unique": false,
        "dataType": "String",
        "dataLength": 20
      },
      {
        "colName": "Fees",
        "unique": false,
        "dataType": "String",
        "dataLength": 10
      }
    ]
  }
};

var dataImportConf = {
  "Inventory": {
    "apiKey": apiKey,
    "timeZone": clientTimeZone,
    "purpose": "ID",
    "debug": true,
    "sort": "n/a",
    "startVal": -1,
    "pageSize": -1,
    "data": [{
      "format": "JSON"
    }]
  }
};


var updateTableConf = {
  "Inventory": {
    "apiKey": apiKey,
    "timeZone": clientTimeZone,
    "purpose": "R",
    "debug": true,
    "sort": "n/a",
    "startVal": -1,
    "pageSize": -1,
    "data": []
  }
};

var deleteTableConf = {
  "Inventory": {
    "apiKey": apiKey,
    "timeZone": clientTimeZone,
    "purpose": "RT",
    "debug": true,
    "sort": "n/a",
    "startVal": -1,
    "pageSize": -1,
    "data": []
  }
}

var deleteRowConf = {
  "Inventory": {
    "apiKey": apiKey,
    "timeZone": clientTimeZone,
    "purpose": "D",
    "debug": true,
    "sort": "n/a",
    "startVal": -1,
    "pageSize": -1,
    "data": [{
      "colName": "id",
      "search": null,
      "strict": false,
      "dataType": "Number"
    }]
  }
};

var addNewBookConf = {
  "Inventory": {
    "apiKey": apiKey,
    "timeZone": clientTimeZone,
    "purpose": "C",
    "debug": true,
    "sort": "n/a",
    "startVal": -1,
    "pageSize": -1,
    "data": [{
        "colName": "Title",
        "strict": false,
        "new": null,
        "dataType": "String"
      },
      {
        "colName": "Author",
        "strict": false,
        "new": null,
        "dataType": "String"
      },
      {
        "colName": "Year",
        "strict": false,
        "new": null,
        "dataType": "String"
      },
      {
        "colName": "Cat",
        "strict": false,
        "new": null,
        "dataType": "String"
      },
      {
        "colName": "Pack",
        "strict": false,
        "new": null,
        "dataType": "String"
      },
      {
        "colName": "ISBN",
        "strict": false,
        "new": null,
        "dataType": "String"
      },
      {
        "colName": "Image",
        "strict": false,
        "new": null,
        "dataType": "String"
      }
    ]
  }
};

var updateBookConf = {
  "Inventory": {
    "apiKey": apiKey,
    "timeZone": clientTimeZone,
    "purpose": "U",
    "debug": true,
    "sort": "n/a",
    "startVal": -1,
    "pageSize": -1,
    "data": [{
        "colName": "id",
        "search": null,
        "strict": true,
        "useForSearch": true,
        "new": -1,
        "update": false,
        "dataType": "Number"
      },
      {
        "colName": "Booked",
        "search": "",
        "strict": false,
        "useForSearch": false,
        "new": null,
        "update": true,
        "dataType": "String"
      },
      {
        "colName": "DateRental",
        "search": "",
        "strict": false,
        "useForSearch": false,
        "new": null,
        "update": true,
        "dataType": "String"
      }
    ]
  }
};

var modifyBookConf = {
  "Inventory": {
    "apiKey": apiKey,
    "timeZone": clientTimeZone,
    "purpose": "U",
    "debug": true,
    "sort": "n/a",
    "startVal": -1,
    "pageSize": -1,
    "data": [{
        "colName": "id",
        "search": null,
        "update": false,
        "strict": true,
        "useForSearch": true,
        "new": -1,
        "dataType": "Number"
      },
      {
        "colName": "Title",
        "strict": false,
        "update": true,
        "new": null,
        "useForSearch": false,
        "dataType": "String"
      },
      {
        "colName": "Author",
        "strict": false,
        "update": true,
        "new": null,
        "useForSearch": false,
        "dataType": "String"
      },
      {
        "colName": "Year",
        "strict": false,
        "update": true,
        "useForSearch": false,
        "new": null,
        "dataType": "String"
      },
      {
        "colName": "Cat",
        "strict": false,
        "update": true,
        "useForSearch": false,
        "new": null,
        "dataType": "String"
      },
      {
        "colName": "Pack",
        "strict": false,
        "update": true,
        "useForSearch": false,
        "new": null,
        "dataType": "String"
      },
      {
        "colName": "ISBN",
        "strict": false,
        "update": true,
        "useForSearch": false,
        "new": null,
        "dataType": "String"
      },
      {
        "colName": "Image",
        "strict": false,
        "update": true,
        "useForSearch": false,
        "new": null,
        "dataType": "String"
      }
    ]
  }
};


var uploadImageConf = {
  "_file_": {
    "apiKey": apiKey,
    "timeZone": clientTimeZone,
    "purpose": "FU",
    "debug": true,
    "path": "public_html/mcr76/library/images/",
    "name": null,
    "sort": "n/a",
    "startVal": -1,
    "pageSize": -1,
  }
};


var createReviewsTableConf = {
  "Reviews": {
    "apiKey": apiKey,
    "timeZone": clientTimeZone,
    "purpose": "CT",
    "debug": true,
    "sort": "n/a",
    "startVal": -1,
    "pageSize": -1,
    "data": [{
        "colName": "Username",
        "unique": false,
        "dataType": "String",
        "dataLength": 100
      },
      {
        "colName": "Raiting",
        "unique": false,
        "dataType": "Number",
        "dataLength": 1
      },
      {
        "colName": "Review",
        "unique": false,
        "dataType": "String",
        "dataLength": 255
      },
      {
        "colName": "BookID",
        "unique": false,
        "dataType": "String",
        "dataLength": 5
      }
    ]
  }
};

var deleteReviewsTableConf = {
  "Reviews": {
    "apiKey": apiKey,
    "timeZone": clientTimeZone,
    "purpose": "RT",
    "debug": true,
    "sort": "n/a",
    "startVal": -1,
    "pageSize": -1,
    "data": []
  }
}


var addNewReviewConf = {
  "Reviews": {
    "apiKey": apiKey,
    "timeZone": clientTimeZone,
    "purpose": "C",
    "debug": true,
    "sort": "n/a",
    "startVal": -1,
    "pageSize": -1,
    "data": [{
        "colName": "Username",
        "strict": false,
        "new": null,
        "dataType": "String"
      },
      {
        "colName": "Raiting",
        "strict": false,
        "new": null,
        "dataType": "String"
      },
      {
        "colName": "Review",
        "strict": false,
        "new": null,
        "dataType": "String"
      },
      {
        "colName": "BookID",
        "strict": false,
        "new": null,
        "dataType": "String"
      }
    ]
  }
};

var getReviewsConf = {
  "Reviews": {
    "apiKey": apiKey,
    "timeZone": clientTimeZone,
    "purpose": "R",
    "debug": true,
    "sort": "n/a",
    "startVal": -1,
    "pageSize": -1,
    "data": []
  }
};