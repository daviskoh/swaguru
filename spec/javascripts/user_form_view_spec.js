describe('UserFormView', function() {
  var view, collection, form;

  beforeEach(function() {
    appendLoadFixtures("user_form.html");
    form = $("form.new-user");

    view = new UserFormView({collection: collection});
  });

  it('is tied to the form', function() {
    console.log(form[0]);
    console.log(view.el);
    expect(view.el).toBe(form[0]);
  });

  it('creates a new user', function() {
    form.find("input[name='name']").val('Bob');
    form.find("input[name='email']").val('bob@bob.com');
    form.find("input[name='password']").val('bob');
    form.find("input[name='gender']").val('male');
    // must start w/ submit() commented out or else Jasmine will infinite loop
    // form.submit();

    expect(collection.create).toHaveBeenCalledWith({name: 'Bob', email: 'bob@bob.com', password: 'bob', gender: 'male'});
  });
});