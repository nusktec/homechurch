<template>
    <d-card class="card-small mb-4 pt-3">

        <!-- Card Header -->
        <d-card-header class="border-bottom text-center">

            <!-- User Avatar -->
            <div class="mb-3 mx-auto">
                <img class="rounded-circle" :src="require('@/assets/images/avatars/'+userDetails.u_avatar+'.jpg')"
                     :alt="userDetails.u_name"
                     width="110">
            </div>

            <!-- User Name -->
            <p class="mb-0">{{ userDetails.u_name }}</p>

            <!-- User Job Title -->
            <span class="text-muted d-block mb-2 badge">{{ userDetails.u_role===0?'Member':'HC.Leader' }}</span>

            <!-- User Follow -->
            <d-button pill outline size="sm" class="mb-2"><i class="material-icons mr-1">note</i> Give Testimony
            </d-button>

        </d-card-header>

        <d-list-group flush>

            <!-- User Performance Report -->
            <d-list-group-item class="px-4">
                <div class="progress-wrapper">
                    <strong class="text-muted d-block mb-2">Activities Progress</strong>
                    <d-progress class="progress-sm">
                        <span class="progress-value">{{ userDetails.u_progress }}%</span>
                        <d-progress-bar :max="100" :value="userDetails.u_progress"/>
                    </d-progress>
                </div>
            </d-list-group-item>

            <!-- User Meta -->
            <d-list-group-item>
                <strong class="text-muted d-block mb-2">About you</strong>
                <span>{{ userDetails.u_desc }}</span>
            </d-list-group-item>
        </d-list-group>

    </d-card>
</template>

<script>
  const defaultUserDetails = {
    u_name: 'Please wait...',
    u_avatar: require('@/assets/images/avatars/1.jpg'),
    u_role: 0,
    u_progress: 0,
    u_desc: 'Loading...',
  };

  export default {
    name: 'user-details',
    props: {
      /**
       * The user details.
       */
      userDetails: {
        type: Object,
        default() {
          return defaultUserDetails;
        },
      },
    },
  };
</script>
