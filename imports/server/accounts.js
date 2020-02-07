Accounts.onCreateUser((options, user) => {
  if(options.email == 'tomy1@gmail.com') {
    user.roles = ['admin'];
  }

  return user;
});
