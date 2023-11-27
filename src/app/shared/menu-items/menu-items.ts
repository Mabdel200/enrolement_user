import { Injectable } from '@angular/core';

export interface Menu {
  state: string;
  name: string;
  type: string;
  icon: string;
}

const MENUITEMS = [
  { state: 'dashboard', name: 'Tableau de bord', type: 'link', icon: 'av_timer' },
  // { state: 'button', type: 'link', name: 'Gérer utilisateurs', icon: 'crop_7_5' },
  { state: 'lists', type: 'link', name: 'Gérer enrolements', icon: 'view_comfy' },
  { state: 'grid', type: 'link', name: 'Gérer les paiements', icon: 'crop_7_5' },
];

const MENUITEMS_ADMIN = [
  { state: 'dashboardAdmin', name: 'Tableau de bord', type: 'link', icon: 'av_timer' },
  // { state: 'button', type: 'link', name: 'Gérer utilisateurs', icon: 'crop_7_5' },
  { state: 'menu', type: 'link', name: 'Gérer enrolements', icon: 'view_comfy' },
  { state: 'chips', type: 'link', name: 'Gérer les paiements', icon: 'crop_7_5' },

];


@Injectable()
export class MenuItems {
  getMenuitem(): Menu[] {

    if(  localStorage.getItem('role') == "USER"){
      return MENUITEMS_ADMIN;
    }
    return MENUITEMS;  
  }


};
