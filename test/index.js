var should = require('chai').should(),
    interpret = require('../index'),
    moment = require('moment');


describe('...ago', function () {

  describe('month/s', function () {

    describe('...months...', function () {

      it('should calculate months ago with integer', function () {
        var time = interpret('3 months ago').format(); // should not care about caps
        var expectedDate = moment().subtract(3, 'months').format();
        time.should.equal(expectedDate);
      });

      it('should calculate months ago with word', function () {
        var time = interpret('three months ago').format();
        var expectedDate = moment().subtract(3, 'months').format();
        time.should.equal(expectedDate);
      });

    });

    describe('...month...', function () {

      it('should calculate month ago with integer', function () {
        var time = interpret('1 month ago').format(); // should not care about caps
        var expectedDate = moment().subtract(1, 'month').format();
        time.should.equal(expectedDate);
      });

      it('should calculate month ago with word', function () {
        var time = interpret('one month ago').format();
        var expectedDate = moment().subtract(1, 'month').format();
        time.should.equal(expectedDate);
      });

    });

  });

  describe('day/s', function () {

    describe('...days...', function () {

      it('should calculate days ago with integer', function () {
        var time = interpret('3 Days ago').format(); // should not care about caps
        var expectedDate = moment().subtract(3, 'days').format();
        time.should.equal(expectedDate);
      });

      it('should calculate days ago with word', function () {
        var time = interpret('three days ago').format();
        var expectedDate = moment().subtract(3, 'days').format();
        time.should.equal(expectedDate);
      });

    });

    describe('...day...', function () {

      it('should calculate day ago with integer', function () {
        var time = interpret('1 day ago').format(); // should not care about caps
        var expectedDate = moment().subtract(1, 'day').format();
        time.should.equal(expectedDate);
      });

      it('should calculate day ago with word', function () {
        var time = interpret('one day ago').format();
        var expectedDate = moment().subtract(1, 'day').format();
        time.should.equal(expectedDate);
      });

    });

  });

  describe('hour/s', function () {

    describe('...hours...', function () {

      it('should calculate hours ago with integer', function () {
        var time = interpret('3 hours ago').format(); // should not care about caps
        var expectedDate = moment().subtract(3, 'hours').format();
        time.should.equal(expectedDate);
      });

      it('should calculate hours ago with word', function () {
        var time = interpret('three hours ago').format();
        var expectedDate = moment().subtract(3, 'hours').format();
        time.should.equal(expectedDate);
      });

    });

    describe('...hour...', function () {

      it('should calculate hour ago with integer', function () {
        var time = interpret('1 hour ago').format(); // should not care about caps
        var expectedDate = moment().subtract(1, 'hour').format();
        time.should.equal(expectedDate);
      });

      it('should calculate hour ago with word', function () {
        var time = interpret('one hour ago').format();
        var expectedDate = moment().subtract(1, 'hour').format();
        time.should.equal(expectedDate);
      });

    });

  });

  describe('minute/s', function () {

    describe('...minutes...', function () {

      it('should calculate minutes ago with integer', function () {
        var time = interpret('3 minutes ago').format(); // should not care about caps
        var expectedDate = moment().subtract(3, 'minutes').format();
        time.should.equal(expectedDate);
      });

      it('should calculate minutes ago with word', function () {
        var time = interpret('three minutes ago').format();
        var expectedDate = moment().subtract(3, 'minutes').format();
        time.should.equal(expectedDate);
      });

    });

    describe('...minute...', function () {

      it('should calculate minute ago with integer', function () {
        var time = interpret('1 minute ago').format(); // should not care about caps
        var expectedDate = moment().subtract(1, 'minute').format();
        time.should.equal(expectedDate);
      });

      it('should calculate minute ago with word', function () {
        var time = interpret('one minute ago').format();
        var expectedDate = moment().subtract(1, 'minute').format();
        time.should.equal(expectedDate);
      });

    });

  });

  describe('second/s', function () {

    describe('...seconds...', function () {

      it('should calculate seconds ago with integer', function () {
        var time = interpret('3 seconds ago').format(); // should not care about caps
        var expectedDate = moment().subtract(3, 'seconds').format();
        time.should.equal(expectedDate);
      });

      it('should calculate seconds ago with word', function () {
        var time = interpret('three seconds ago').format();
        var expectedDate = moment().subtract(3, 'seconds').format();
        time.should.equal(expectedDate);
      });

    });

    describe('...second...', function () {

      it('should calculate second ago with integer', function () {
        var time = interpret('1 second ago').format(); // should not care about caps
        var expectedDate = moment().subtract(1, 'second').format();
        time.should.equal(expectedDate);
      });

      it('should calculate second ago with word', function () {
        var time = interpret('one second ago').format();
        var expectedDate = moment().subtract(1, 'second').format();
        time.should.equal(expectedDate);
      });

    });

  });

});

