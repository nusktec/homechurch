export default function () {
  return [
    {
      title: 'Home',
      htmlBefore: '<i class="fas fa-home"></i>',
      to: {
        name: 'home',
      },
      meta: { isAdmin: false }
    },
    {
      title: 'Testimony',
      htmlBefore: '<i class="fas fa-pencil-alt"></i>',
      to: {
        name: 'testimony',
      },
      meta: { isAdmin: false }
    },
    {
      title: 'Profile',
      htmlBefore: '<i class="fas fa-user"></i>',
      to: {
        name: 'profile',
      },
      meta: { isAdmin: false }
    }
  ];
}
