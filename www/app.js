var database = null;

var nextUser = 101;

function initDatabase() {
  database = window.sqlitePlugin.openDatabase({name: 'sample.db', location: 'default'});

  database.transaction(function(transaction) {
    transaction.executeSql('CREATE TABLE SampleTable (name, score)');
  });
}

function echoTest() {
  window.sqlitePlugin.echoTest(function() {
    navigator.notification.alert('Echo test OK');
  }, function(error) {
    navigator.notification.alert('Echo test ERROR: ' + error.message);
  });
}

function selfTest() {
  window.sqlitePlugin.selfTest(function() {
    navigator.notification.alert('Self test OK');
  }, function(error) {
    navigator.notification.alert('Self test ERROR: ' + error.message);
  });
}

function reload() {
  location.reload();
}

function stringTest1() {
  database.transaction(function(transaction) {
    transaction.executeSql("SELECT upper('Test string') AS upperText", [], function(ignored, resultSet) {
      navigator.notification.alert('Got upperText result (ALL CAPS): ' + resultSet.rows.item(0).upperText);
    });
  }, function(error) {
    navigator.notification.alert('SELECT count error: ' + error.message);
  });
}

function stringTest2() {
  database.transaction(function(transaction) {
    transaction.executeSql('SELECT upper(?) AS upperText', ['Test string'], function(ignored, resultSet) {
      navigator.notification.alert('Got upperText result (ALL CAPS): ' + resultSet.rows.item(0).upperText);
    });
  }, function(error) {
    navigator.notification.alert('SELECT count error: ' + error.message);
  });
}

function showCount() {
  database.transaction(function(transaction) {
    transaction.executeSql('SELECT count(*) AS recordCount FROM SampleTable', [], function(ignored, resultSet) {
      navigator.notification.alert('RECORD COUNT: ' + resultSet.rows.item(0).recordCount);
    });
  }, function(error) {
    navigator.notification.alert('SELECT count error: ' + error.message);
  });
}

function addRecord() {
  database.transaction(function(transaction) {
    transaction.executeSql('INSERT INTO SampleTable VALUES (?,?)', ['User '+nextUser, nextUser]);
  }, function(error) {
    navigator.notification.alert('INSERT error: ' + error.message);
  }, function() {
    navigator.notification.alert('INSERT OK');
    ++nextUser;
  });
}

function addJSONRecordsAfterDelay() {
  function getJSONObjectArray() {
    var COUNT = 100;
    var myArray = [];

    for (var i=0; i<COUNT; ++i) {
      myArray.push({name: 'User '+nextUser, score: nextUser});
      ++nextUser;
    }

    return myArray;
  }

  function getJSONAfterDelay() {
    var MY_DELAY = 150;

    var d = $.Deferred();

    setTimeout(function() {
      d.resolve(getJSONObjectArray());
    }, MY_DELAY);

    return $.when(d);
  }

  // NOTE: This is similar to the case when an application
  // fetches the data over AJAX to populate the database.
  // IMPORTANT: The application MUST get the data before
  // starting the transaction.
  getJSONAfterDelay().then(function(jsonObjectArray) {
    database.transaction(function(transaction) {
      $.each(jsonObjectArray, function(index, recordValue) {
        transaction.executeSql('INSERT INTO SampleTable VALUES (?,?)',
          [recordValue.name, recordValue.score]);
      });
    }, function(error) {
      navigator.notification.alert('ADD records after delay ERROR');
    }, function() {
      navigator.notification.alert('ADD 100 records after delay OK');
    });
  });
}

function deleteRecords() {
  database.transaction(function(transaction) {
    transaction.executeSql('DELETE FROM SampleTable');
  }, function(error) {
    navigator.notification.alert('DELETE error: ' + error.message);
  }, function() {
    navigator.notification.alert('DELETE OK');
    ++nextUser;
  });
}

function nativeAlertTest() {
  navigator.notification.alert('Native alert test message');
}

function goToPage2() {
  window.location = "page2.html";
}

document.addEventListener('deviceready', function() {
  $('#native-alert-test').click(nativeAlertTest);
  $('#echo-test').click(echoTest);
  $('#self-test').click(selfTest);
  $('#reload').click(reload);
  $('#string-test-1').click(stringTest1);
  $('#string-test-2').click(stringTest2);
  $('#show-count').click(showCount);
  $('#add-record').click(addRecord);
  $('#add-json-records-after-delay').click(addJSONRecordsAfterDelay);
  $('#delete-records').click(deleteRecords);
  $('#location-page2').click(goToPage2);

  initDatabase();
});
