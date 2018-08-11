import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [{
    path: '/',
    name: 'landing-page',
    component: require('@/components/LandingPage/NowPlaying.vue').default,
  },
  {
    path: '/about',
    name: 'about-page',
    component: require('@/components/LandingPage/AboutUs.vue').default,
  },
  {
    path: '/nowPlaying',
    name: 'now-playing',
    component: require('@/components/LandingPage/NowPlaying.vue').default,

  },
  {
    path: '/albumView',
    name: 'album-view',
    component: require('@/components/LandingPage/AlbumView.vue').default,

  },
  {
    path: '/artistView',
    name: 'artist-view',
    component: require('@/components/LandingPage/ArtistView.vue').default,

  },
  {
    path: '/allsongsView',
    name: 'songs-view',
    component: require('@/components/LandingPage/SongsView.vue').default,

  },
  {
    path: '/playlistView',
    name: 'playlist-view',
    component: require('@/components/LandingPage/PlaylistView.vue').default,

  },
  {
    path: '/settings',
    name: 'settings-view',
    component: require('@/components/LandingPage/Settings.vue').default,
  },
  {
    path: '/songs/:songDetail',
    name: 'songs',
    component: require('@/components/LandingPage/SeperateArtistAlbum.vue').default,
    props: true,
  },
  {
    path: '*',
    redirect: '/',
  },
  ],
});
