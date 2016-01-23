'use strict';

describe('Factories: DequeueAircraft ::', function () {

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
    expect(dequeueAircraft).not.toBe(undefined);
  });

  it('should dequeue an aircraft with a type and size', function () {

    enqueueAircraft.enqueue('Passenger', 'Large');

    expect(enqueueAircraft.queueArray[0].Type).toEqual('Passenger');
    expect(enqueueAircraft.queueArray[0].Size).toEqual('Large');
    
    dequeueAircraft.dequeue();

    expect(enqueueAircraft.queueArray.length).toBe(0);
  });

  it('should dequeue no aircrafts with none are enqueued', function () {

    expect(enqueueAircraft.queueArray.length).toBe(0);
    
    spyOn(window, 'alert');
    dequeueAircraft.dequeue();
    expect(enqueueAircraft.queueArray.length).toBe(0);
    expect(window.alert).toHaveBeenCalledWith('No more Aircrafts to dequeue');
  });

  it('should dequeue aircrafts in the order they are queued, dequeue the top from the list. (Enqueued as per conditions)', function () {

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

    expect(enqueueAircraft.queueArray.length).toBe(6);

    dequeueAircraft.dequeue();
    expect(enqueueAircraft.queueArray.length).toBe(5);
    expect(enqueueAircraft.queueArray[0].Type).toEqual(acOrderSix.Type);
    expect(enqueueAircraft.queueArray[0].Size).toEqual(acOrderSix.Size);

    dequeueAircraft.dequeue();
    expect(enqueueAircraft.queueArray.length).toBe(4);
    expect(enqueueAircraft.queueArray[0].Type).toEqual(acOrderThree.Type);
    expect(enqueueAircraft.queueArray[0].Size).toEqual(acOrderThree.Size);

    dequeueAircraft.dequeue();
    expect(enqueueAircraft.queueArray.length).toBe(3);
    expect(enqueueAircraft.queueArray[0].Type).toEqual(acOrderOne.Type);
    expect(enqueueAircraft.queueArray[0].Size).toEqual(acOrderOne.Size);

    dequeueAircraft.dequeue();
    expect(enqueueAircraft.queueArray.length).toBe(2);
    expect(enqueueAircraft.queueArray[0].Type).toEqual(acOrderFour.Type);
    expect(enqueueAircraft.queueArray[0].Size).toEqual(acOrderFour.Size);

    dequeueAircraft.dequeue();
    expect(enqueueAircraft.queueArray.length).toBe(1);
    expect(enqueueAircraft.queueArray[0].Type).toEqual(acOrderFive.Type);
    expect(enqueueAircraft.queueArray[0].Size).toEqual(acOrderFive.Size);


    dequeueAircraft.dequeue();
    expect(enqueueAircraft.queueArray.length).toBe(0);

    spyOn(window, 'alert');
    dequeueAircraft.dequeue();
    expect(enqueueAircraft.queueArray.length).toBe(0);
    expect(window.alert).toHaveBeenCalledWith('No more Aircrafts to dequeue');

  });
 
});
