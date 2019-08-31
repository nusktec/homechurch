export default function () {
  return [
    {
      title: 'Profile',
      htmlBefore: '<i class="fas fa-user"></i>',
      to: {
        name: 'profile',
      },
      meta: { isAdmin: false }
    }];
}
