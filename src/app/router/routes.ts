
import {HomePageComponent} from '../pages/home-page/home-page.component';
import {HeadphonesPageComponent} from '../pages/headphones-page/headphones-page.component';
import {SpeakersPageComponent} from '../pages/speakers-page/speakers-page.component';
import {EarphonesPageComponent} from '../pages/earphones-page/earphones-page.component'

export let routes = [
  
    { path:'', component: HomePageComponent},
    {path:'headphones',component: HeadphonesPageComponent },
    {path:'speakers',component: SpeakersPageComponent },
    {path:'earphones',component: EarphonesPageComponent },

  ]