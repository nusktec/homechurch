export default function () {
    return [
        {
            title: 'Cell Finder',
            htmlBefore: '<i class="fas fa-search"></i>',
            to: {
                name: 'home',
            },
            meta: {isAdmin: false}
        },
        {
            title: 'Submit Home',
            htmlBefore: '<i class="fas fa-plus"></i>',
            to: {
                name: 'submit-home',
            },
            meta: {isAdmin: false}
        },
        {
            title: 'Testimony',
            htmlBefore: '<i class="fas fa-pencil-alt"></i>',
            to: {
                name: 'testimony',
            },
            meta: {isAdmin: false}
        },
        {
            title: 'Community',
            htmlBefore: '<i class="fas fa-users"></i>',
            to: {
                name: 'community',
            },
            meta: {isAdmin: false}
        },
        {
            title: 'Find Locations',
            htmlBefore: '<i class="fas fa-map-marker"></i>',
            to: {
                name: 'find-locations',
            },
            meta: {isAdmin: false}
        },
        {
            title: 'Profile',
            htmlBefore: '<i class="fas fa-user"></i>',
            to: {
                name: 'profile',
            },
            meta: {isAdmin: false}
        }
    ];
}
