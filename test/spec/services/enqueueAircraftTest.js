'use strict';

describe('Factories: EnqueueAircraft ::', function () {

  // load the service's module
  beforeEach(module('acInterviewProjectApp'));

  // instantiate service
  var Aircraft,
      dequeueAircraft,
      enqueueAircraft;

  beforeEach(inject(function($injector) {
    Aircraft = $injector.get('aircraft');
    enqueueAircraft = $injector.get('enqueueAircraft');
    dequeueAircraft = $injector.get('dequeueAircraft');

  }));

  it('should exist', function () {
    expect(enqueueAircraft).not.toBe(undefined);
  });

  it('should enqueue an aircraft with a type and size', function () {
    enqueueAircraft.enqueue('Passenger', 'Large');

    expect(enqueueAircraft.queueArray[0].Type).toEqual('Passenger');
   	expect(enqueueAircraft.queueArray[0].Size).toEqual('Large');
  });

  it('should enqueue few aircrafts with type and size and order them as per Type and Size', function () {
    enqueueAircraft.enqueue('Passenger', 'Large');
    enqueueAircraft.enqueue('Cargo', 'Large');
    enqueueAircraft.enqueue('Cargo', 'Small');
    enqueueAircraft.enqueue('Passenger', 'Small');

    expect(enqueueAircraft.queueArray[0].Type).toEqual('Passenger');
    expect(enqueueAircraft.queueArray[0].Size).toEqual('Large');
    expect(enqueueAircraft.queueArray[1].Type).toEqual('Passenger');
    expect(enqueueAircraft.queueArray[1].Size).toEqual('Small');
    expect(enqueueAircraft.queueArray[2].Type).toEqual('Cargo');
    expect(enqueueAircraft.queueArray[2].Size).toEqual('Large');
    expect(enqueueAircraft.queueArray[3].Type).toEqual('Cargo');
    expect(enqueueAircraft.queueArray[3].Size).toEqual('Small');
  });

  it('should enqueue two aircrafts with same type and size and order them as per time', function () {
    var acTimeOne = new Aircraft();
    acTimeOne.Type = 'Passenger';
    acTimeOne.Size = 'Large';

    var acTimeTwo = new Aircraft();
    acTimeTwo.Type = 'Passenger';
    acTimeTwo.Size = 'Large';

    enqueueAircraft.enqueue(acTimeOne.Type, acTimeOne.Size);
    enqueueAircraft.enqueue(acTimeTwo.Type, acTimeTwo.Size);

    expect(enqueueAircraft.queueArray[0].Type).toEqual(acTimeOne.Type);
    expect(enqueueAircraft.queueArray[0].Size).toEqual(acTimeOne.Size);
    expect(enqueueAircraft.queueArray[1].Type).toEqual(acTimeTwo.Type);
    expect(enqueueAircraft.queueArray[1].Size).toEqual(acTimeTwo.Size);
  });


  it('should enqueue few aircrafts and order them satisfying all conditions', function () {
    var acOrderOne = new Aircraft();
    acOrderOne.Type = 'Cargo';
    acOrderOne.Size = 'Large';

    var acOrderTwo = new Aircraft();
    acOrderTwo.Type = 'Passenger';
    acOrderTwo.Size = 'Large';

    var acOrderThree = new Aircraft();
    acOrderThree.Type = 'Passenger';
    acOrderThree.Size = 'Small';

    var acOrderFour = new Aircraft();
    acOrderFour.Type = 'Cargo';
    acOrderFour.Size = 'Large';

    var acOrderFive = new Aircraft();
    acOrderFive.Type = 'Cargo';
    acOrderFive.Size = 'Small';

    var acOrderSix = new Aircraft();
    acOrderSix.Type = 'Passenger';
    acOrderSix.Size = 'Large';

    enqueueAircraft.enqueue(acOrderOne.Type, acOrderOne.Size);
    enqueueAircraft.enqueue(acOrderTwo.Type, acOrderTwo.Size);
    enqueueAircraft.enqueue(acOrderThree.Type, acOrderThree.Size);
    enqueueAircraft.enqueue(acOrderFour.Type, acOrderFour.Size);
    enqueueAircraft.enqueue(acOrderFive.Type, acOrderFive.Size);
    enqueueAircraft.enqueue(acOrderSix.Type, acOrderSix.Size);

    expect(enqueueAircraft.queueArray[0].Type).toEqual(acOrderTwo.Type);
    expect(enqueueAircraft.queueArray[0].Size).toEqual(acOrderTwo.Size);
    expect(enqueueAircraft.queueArray[1].Type).toEqual(acOrderSix.Type);
    expect(enqueueAircraft.queueArray[1].Size).toEqual(acOrderSix.Size);
    expect(enqueueAircraft.queueArray[2].Type).toEqual(acOrderThree.Type);
    expect(enqueueAircraft.queueArray[2].Size).toEqual(acOrderThree.Size);
    expect(enqueueAircraft.queueArray[3].Type).toEqual(acOrderOne.Type);
    expect(enqueueAircraft.queueArray[3].Size).toEqual(acOrderOne.Size);
    expect(enqueueAircraft.queueArray[4].Type).toEqual(acOrderFour.Type);
    expect(enqueueAircraft.queueArray[4].Size).toEqual(acOrderFour.Size);
    expect(enqueueAircraft.queueArray[5].Type).toEqual(acOrderFive.Type);
    expect(enqueueAircraft.queueArray[5].Size).toEqual(acOrderFive.Size);
  });

});
