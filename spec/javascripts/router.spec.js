// describe('Router', function() {
//   var router, routeSpy;

//   beforeEach(function() {
//     router = new Router();
//     routeSpy = sinon.spy();

//     try {
//       router.history.start(); //pushState: true
//     } catch(e) {}

//     router.navigate('elsewhere');
//   });

//   it('fires the home route', function() {
//     // when hit '/' route, render signup/signin option
//     router.bind('route:index', routeSpy);
//     router.bind('', true);
//     expect(routeSpy).toHaveBeenCalled();
//     expect(routeSpy).toHaveBeenCalledWith();
//   });

//   it('fires the create new user route', function() {
//     // when hit '/users/new' route, render signup
//       // instantiate UserFormView
//   });
// });
