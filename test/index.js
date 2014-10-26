var should = require('chai').should(),
    interpret = require('../index'),
    moment = require('moment');


describe('...ago', function () {

  describe('year/s', function () {

    describe('...years...', function () {

      it('should calculate years ago with integer', function () {
        var time = interpret('3 years ago').format(); // should not care about caps
        var expectedDate = moment().subtract(3, 'years').format();
        time.should.equal(expectedDate);
      });

      it('should calculate years ago with word', function () {
        var time = interpret('three years ago').format();
        var expectedDate = moment().subtract(3, 'years').format();
        time.should.equal(expectedDate);
      });

    });

    describe('...year...', function () {

      it('should calculate year ago with integer', function () {
        var time = interpret('1 year ago').format(); // should not care about caps
        var expectedDate = moment().subtract(1, 'year').format();
        time.should.equal(expectedDate);
      });

      it('should calculate year ago with word', function () {
        var time = interpret('one year ago').format();
        var expectedDate = moment().subtract(1, 'year').format();
        time.should.equal(expectedDate);
      });

    });

  });

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


describe('...from now...', function () {

  describe('year/s', function () {

    describe('...years...', function () {

      it('should calculate years from now with integer', function () {
        var time = interpret('3 years from now').format('YYYY-MM-DD'); // should not care about caps
        var expectedDate = moment().add(3, 'years').format('YYYY-MM-DD');
        time.should.equal(expectedDate);
      });

      it('should calculate years from now with word', function () {
        var time = interpret('three years from now').format('YYYY-MM-DD');
        var expectedDate = moment().add(3, 'years').format('YYYY-MM-DD');
        time.should.equal(expectedDate);
      });

    });

    describe('...year...', function () {

      it('should calculate year from now with integer', function () {
        var time = interpret('1 year from now').format(); // should not care about caps
        var expectedDate = moment().add(1, 'year').format();
        time.should.equal(expectedDate);
      });

      it('should calculate year from now with word', function () {
        var time = interpret('one year from now').format();
        var expectedDate = moment().add(1, 'year').format();
        time.should.equal(expectedDate);
      });

    });

  });

  describe('month/s', function () {

    describe('...months...', function () {

      it('should calculate months from now with integer', function () {
        var time = interpret('3 months from now').format(); // should not care about caps
        var expectedDate = moment().add(3, 'months').format();
        time.should.equal(expectedDate);
      });

      it('should calculate months from now with word', function () {
        var time = interpret('three months from now').format();
        var expectedDate = moment().add(3, 'months').format();
        time.should.equal(expectedDate);
      });

    });

    describe('...month...', function () {

      it('should calculate month from now with integer', function () {
        var time = interpret('1 month from now').format(); // should not care about caps
        var expectedDate = moment().add(1, 'month').format();
        time.should.equal(expectedDate);
      });

      it('should calculate month from now with word', function () {
        var time = interpret('one month from now').format();
        var expectedDate = moment().add(1, 'month').format();
        time.should.equal(expectedDate);
      });

    });

  });

  describe('day/s', function () {

    describe('...days...', function () {

      it('should calculate days from now with integer', function () {
        var time = interpret('3 Days from now').format(); // should not care about caps
        var expectedDate = moment().add(3, 'days').format();
        time.should.equal(expectedDate);
      });

      it('should calculate days from now with word', function () {
        var time = interpret('three days from now').format();
        var expectedDate = moment().add(3, 'days').format();
        time.should.equal(expectedDate);
      });

    });

    describe('...day...', function () {

      it('should calculate day from now with integer', function () {
        var time = interpret('1 day from now').format(); // should not care about caps
        var expectedDate = moment().add(1, 'day').format();
        time.should.equal(expectedDate);
      });

      it('should calculate day from now with word', function () {
        var time = interpret('one day from now').format();
        var expectedDate = moment().add(1, 'day').format();
        time.should.equal(expectedDate);
      });

    });

  });

  describe('hour/s', function () {

    describe('...hours...', function () {

      it('should calculate hours from now with integer', function () {
        var time = interpret('3 hours from now').format(); // should not care about caps
        var expectedDate = moment().add(3, 'hours').format();
        time.should.equal(expectedDate);
      });

      it('should calculate hours from now with word', function () {
        var time = interpret('three hours from now').format();
        var expectedDate = moment().add(3, 'hours').format();
        time.should.equal(expectedDate);
      });

    });

    describe('...hour...', function () {

      it('should calculate hour from now with integer', function () {
        var time = interpret('1 hour from now').format(); // should not care about caps
        var expectedDate = moment().add(1, 'hour').format();
        time.should.equal(expectedDate);
      });

      it('should calculate hour from now with word', function () {
        var time = interpret('one hour from now').format();
        var expectedDate = moment().add(1, 'hour').format();
        time.should.equal(expectedDate);
      });

    });

  });

  describe('minute/s', function () {

    describe('...minutes...', function () {

      it('should calculate minutes from now with integer', function () {
        var time = interpret('3 minutes from now').format(); // should not care about caps
        var expectedDate = moment().add(3, 'minutes').format();
        time.should.equal(expectedDate);
      });

      it('should calculate minutes from now with word', function () {
        var time = interpret('three minutes from now').format();
        var expectedDate = moment().add(3, 'minutes').format();
        time.should.equal(expectedDate);
      });

    });

    describe('...minute...', function () {

      it('should calculate minute from now with integer', function () {
        var time = interpret('1 minute from now').format(); // should not care about caps
        var expectedDate = moment().add(1, 'minute').format();
        time.should.equal(expectedDate);
      });

      it('should calculate minute from now with word', function () {
        var time = interpret('one minute from now').format();
        var expectedDate = moment().add(1, 'minute').format();
        time.should.equal(expectedDate);
      });

    });

  });

  describe('second/s', function () {

    describe('...seconds...', function () {

      it('should calculate seconds from now with integer', function () {
        var time = interpret('3 seconds from now').format(); // should not care about caps
        var expectedDate = moment().add(3, 'seconds').format();
        time.should.equal(expectedDate);
      });

      it('should calculate seconds from now with word', function () {
        var time = interpret('three seconds from now').format();
        var expectedDate = moment().add(3, 'seconds').format();
        time.should.equal(expectedDate);
      });

    });

    describe('...second...', function () {

      it('should calculate second from now with integer', function () {
        var time = interpret('1 second from now').format(); // should not care about caps
        var expectedDate = moment().add(1, 'second').format();
        time.should.equal(expectedDate);
      });

      it('should calculate second from now with word', function () {
        var time = interpret('one second from now').format();
        var expectedDate = moment().add(1, 'second').format();
        time.should.equal(expectedDate);
      });

    });

  });

});

