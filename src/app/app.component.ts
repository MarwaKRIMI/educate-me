import { Component, Inject, LOCALE_ID, Renderer2 } from '@angular/core';
import { ConfigService } from '../@vex/services/config.service';
import { Settings } from 'luxon';
import { DOCUMENT } from '@angular/common';
import { Platform } from '@angular/cdk/platform';
import { NavigationService } from '../@vex/services/navigation.service';
import icLayers from '@iconify/icons-ic/twotone-layers';
import icAssigment from '@iconify/icons-ic/twotone-assignment';
import icContactSupport from '@iconify/icons-ic/twotone-contact-support';
import icDateRange from '@iconify/icons-ic/twotone-date-range';
import icChat from '@iconify/icons-ic/twotone-chat';
import icContacts from '@iconify/icons-ic/twotone-contacts';
import icAssessment from '@iconify/icons-ic/twotone-assessment';
import icLock from '@iconify/icons-ic/twotone-lock';
import icWatchLater from '@iconify/icons-ic/twotone-watch-later';
import icError from '@iconify/icons-ic/twotone-error';
import icAttachMoney from '@iconify/icons-ic/twotone-attach-money';
import icPersonOutline from '@iconify/icons-ic/twotone-person-outline';
import icReceipt from '@iconify/icons-ic/twotone-receipt';
import icHelp from '@iconify/icons-ic/twotone-help';
import icBook from '@iconify/icons-ic/twotone-book';
import icBubbleChart from '@iconify/icons-ic/twotone-bubble-chart';
import icFormatColorText from '@iconify/icons-ic/twotone-format-color-text';
import icStar from '@iconify/icons-ic/twotone-star';
import icViewCompact from '@iconify/icons-ic/twotone-view-compact';
import icPictureInPicture from '@iconify/icons-ic/twotone-picture-in-picture';
import tasks from '@iconify/icons-fa-solid/tasks';
import home from '@iconify/icons-fa-solid/home';
import icmessage from '@iconify/icons-ic/twotone-message';
import icdashboard from '@iconify/icons-ic/twotone-dashboard';

import icSettings from '@iconify/icons-ic/twotone-settings';
import { LayoutService } from '../@vex/services/layout.service';
import icUpdate from '@iconify/icons-ic/twotone-update';
import { ActivatedRoute } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { SplashScreenService } from '../@vex/services/splash-screen.service';
import { Style, StyleService } from '../@vex/services/style.service';
import icChromeReaderMode from '@iconify/icons-ic/twotone-chrome-reader-mode';
import { ConfigName } from '../@vex/interfaces/config-name.model';
import icslow_motion_video from '@iconify/icons-ic/twotone-slow-motion-video';

@Component({
  selector: 'vex-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'vex';

  constructor(private configService: ConfigService,
              private styleService: StyleService,
              private renderer: Renderer2,
              private platform: Platform,
              @Inject(DOCUMENT) private document: Document,
              @Inject(LOCALE_ID) private localeId: string,
              private layoutService: LayoutService,
              private route: ActivatedRoute,
              private navigationService: NavigationService,
              private splashScreenService: SplashScreenService) {
    Settings.defaultLocale = this.localeId;

    if (this.platform.BLINK) {
      this.renderer.addClass(this.document.body, 'is-blink');
    }

    /**
     * Customize the template to your needs with the ConfigService
     * Example:
     *  this.configService.updateConfig({
     *    sidenav: {
     *      title: 'Custom App',
     *      imageUrl: '//placehold.it/100x100',
     *      showCollapsePin: false
     *    },
     *    footer: {
     *      visible: false
     *    }
     *  });
     */

    /**
     * Config Related Subscriptions
     * You can remove this if you don't need the functionality of being able to enable specific configs with queryParams
     * Example: example.com/?layout=apollo&style=default
     */
    this.route.queryParamMap.pipe(
      map(queryParamMap => queryParamMap.has('rtl') && coerceBooleanProperty(queryParamMap.get('rtl'))),
    ).subscribe(isRtl => {
      this.document.body.dir = isRtl ? 'rtl' : 'ltr';
      this.configService.updateConfig({
        rtl: isRtl
      });
    });

    this.route.queryParamMap.pipe(
      filter(queryParamMap => queryParamMap.has('layout'))
    ).subscribe(queryParamMap => this.configService.setConfig(queryParamMap.get('layout') as ConfigName));

    this.route.queryParamMap.pipe(
      filter(queryParamMap => queryParamMap.has('style'))
    ).subscribe(queryParamMap => this.styleService.setStyle(queryParamMap.get('style') as Style));


    /**
     * Add your own routes here
     */
    this.navigationService.items = [
      // {
      //   type: 'link',
      //   label: 'Home',
      //   route: '/',
      //   icon: icLayers,
      //   routerLinkActiveOptions: { exact: true }
      // },
      {
        type: 'subheading',
        label: '',
        children: [
          {
            type: 'link',
            label: 'Home',
            route: '/',
            icon: home,
          },
          {
            type: 'link',
            label: 'Dashboard',
            route: '/apps/social',

            icon: icdashboard,
            
          },
          {
            type: 'link',
            label: 'Lesson videos',
            route: '/apps/social/timeline',
            icon: icslow_motion_video,
            // badge: {
            //   value: '12',
            //   bgClass: 'bg-deep-purple',
            //   textClass: 'text-deep-purple-contrast',
            // },
          },
          {
            type: 'link',
            label: 'Homework',
            route: '/apps/contacts/grid',
            icon: tasks,
            // badge: {
            //   value: '16',
            //   bgClass: 'bg-cyan',
            //   textClass: 'text-cyan-contrast',
            // },
          },
          {
            type: 'link',
            label: 'Online Exam',
            icon: icPersonOutline,
            route: '/apps/chat',

          },
          {
            type: 'link',
            label: 'Result',
            route: '/apps/editor',
            icon: icAssigment
          },
          {
            type: 'link',
            label: 'Message',
            icon: icmessage,
            route: '/apps/contacts/table',

            // children: [
            //   {
            //     type: 'link',
            //     label: 'List - Grid',
            //     route: '/apps/contacts/grid',
            //   },
            //   {
            //     type: 'link',
            //     label: 'List - Table',
            //     route: '/apps/contacts/table',
            //   }
            // ]
          },
          // {
          //   type: 'link',
          //   label: 'Scrumboard',
          //   route: '/apps/scrumboard',
          //   icon: icAssessment,
          //   badge: {
          //     value: 'NEW',
          //     bgClass: 'bg-primary',
          //     textClass: 'text-primary-contrast',
          //   }
          // },
        ]
      },
      // {
      //   type: 'subheading',
      //   label: 'Pages',
      //   children: [
      //     {
      //       type: 'dropdown',
      //       label: 'Authentication',
      //       icon: icLock,
      //       children: [
      //         {
      //           type: 'link',
      //           label: 'Login',
      //           route: '/login'
      //         },
      //         {
      //           type: 'link',
      //           label: 'Register',
      //           route: '/register'
      //         },
      //         {
      //           type: 'link',
      //           label: 'Forgot Password',
      //           route: '/forgot-password'
      //         }
      //       ]
      //     },
      //     {
      //       type: 'link',
      //       label: 'Coming Soon',
      //       icon: icWatchLater,
      //       route: '/coming-soon'
      //     },
      //     {
      //       type: 'dropdown',
      //       label: 'Errors',
      //       icon: icError,
      //       badge: {
      //         value: '4',
      //         bgClass: 'bg-green',
      //         textClass: 'text-green-contrast',
      //       },
      //       children: [
      //         {
      //           type: 'link',
      //           label: '404',
      //           route: '/pages/error-404'
      //         },
      //         {
      //           type: 'link',
      //           label: '500',
      //           route: '/pages/error-500'
      //         }
      //       ]
      //     },
      //     {
      //       type: 'link',
      //       label: 'Pricing',
      //       icon: icAttachMoney,
      //       route: '/pages/pricing'
      //     },
      //     {
      //       type: 'link',
      //       label: 'Invoice',
      //       icon: icReceipt,
      //       route: '/pages/invoice'
      //     },
      //     {
      //       type: 'link',
      //       label: 'FAQ',
      //       icon: icHelp,
      //       route: '/pages/faq'
      //     },
      //     {
      //       type: 'link',
      //       label: 'Guides',
      //       icon: icBook,
      //       route: '/pages/guides',
      //       badge: {
      //         value: '18',
      //         bgClass: 'bg-teal',
      //         textClass: 'text-teal-contrast',
      //       },
      //     },
      //   ]
      // },
      // {
      //   type: 'subheading',
      //   label: 'UI Elements',
      //   children: [
      //     {
      //       type: 'dropdown',
      //       label: 'Components',
      //       icon: icBubbleChart,
      //       children: [
      //         {
      //           type: 'link',
      //           label: 'Overview',
      //           route: '/ui/components/overview'
      //         },
      //         {
      //           type: 'link',
      //           label: 'Autocomplete',
      //           route: '/ui/components/autocomplete'
      //         },
      //         {
      //           type: 'link',
      //           label: 'Buttons',
      //           route: '/ui/components/buttons'
      //         },
      //         {
      //           type: 'link',
      //           label: 'Button Group',
      //           route: '/ui/components/button-group'
      //         },
      //         {
      //           type: 'link',
      //           label: 'Cards',
      //           route: '/ui/components/cards'
      //         },
      //         {
      //           type: 'link',
      //           label: 'Checkbox',
      //           route: '/ui/components/checkbox'
      //         },
      //         {
      //           type: 'link',
      //           label: 'Dialogs',
      //           route: '/ui/components/dialogs'
      //         },
      //         {
      //           type: 'link',
      //           label: 'Grid List',
      //           route: '/ui/components/grid-list'
      //         },
      //         {
      //           type: 'link',
      //           label: 'Input',
      //           route: '/ui/components/input'
      //         },
      //         {
      //           type: 'link',
      //           label: 'Lists',
      //           route: '/ui/components/lists'
      //         },
      //         {
      //           type: 'link',
      //           label: 'Menu',
      //           route: '/ui/components/menu'
      //         },
      //         {
      //           type: 'link',
      //           label: 'Progress',
      //           route: '/ui/components/progress'
      //         },
      //         {
      //           type: 'link',
      //           label: 'Progress Spinner',
      //           route: '/ui/components/progress-spinner'
      //         },
      //         {
      //           type: 'link',
      //           label: 'Radio',
      //           route: '/ui/components/radio'
      //         },
      //         {
      //           type: 'link',
      //           label: 'Slide Toggle',
      //           route: '/ui/components/slide-toggle'
      //         },
      //         {
      //           type: 'link',
      //           label: 'Slider',
      //           route: '/ui/components/slider'
      //         },
      //         {
      //           type: 'link',
      //           label: 'Snack Bar',
      //           route: '/ui/components/snack-bar'
      //         },
      //         {
      //           type: 'link',
      //           label: 'Tooltip',
      //           route: '/ui/components/tooltip'
      //         },
      //       ]
      //     },
      //     {
      //       type: 'dropdown',
      //       label: 'Forms',
      //       icon: icFormatColorText,
      //       children: [
      //         {
      //           type: 'link',
      //           label: 'Form Elements',
      //           route: '/ui/forms/form-elements'
      //         },
      //         {
      //           type: 'link',
      //           label: 'Form Wizard',
      //           route: '/ui/forms/form-wizard'
      //         }
      //       ]
      //     },
      //     {
      //       type: 'dropdown',
      //       label: 'Icons',
      //       icon: icStar,
      //       children: [
      //         {
      //           type: 'link',
      //           label: 'Material Icons',
      //           route: '/ui/icons/ic'
      //         },
      //         {
      //           type: 'link',
      //           label: 'FontAwesome Icons',
      //           route: '/ui/icons/fa'
      //         }
      //       ]
      //     },
      //     {
      //       type: 'dropdown',
      //       label: 'Page Layouts',
      //       icon: icViewCompact,
      //       children: [
      //         {
      //           type: 'dropdown',
      //           label: 'Card',
      //           children: [
      //             {
      //               type: 'link',
      //               label: 'Default',
      //               route: '/ui/page-layouts/card',
      //               routerLinkActiveOptions: { exact: true }
      //             },
      //             {
      //               type: 'link',
      //               label: 'Tabbed',
      //               route: '/ui/page-layouts/card/tabbed',
      //             },
      //             {
      //               type: 'link',
      //               label: 'Large Header',
      //               route: '/ui/page-layouts/card/large-header',
      //               routerLinkActiveOptions: { exact: true }
      //             },
      //             {
      //               type: 'link',
      //               label: 'Tabbed & Large Header',
      //               route: '/ui/page-layouts/card/large-header/tabbed'
      //             }
      //           ]
      //         },
      //         {
      //           type: 'dropdown',
      //           label: 'Simple',
      //           children: [
      //             {
      //               type: 'link',
      //               label: 'Default',
      //               route: '/ui/page-layouts/simple',
      //               routerLinkActiveOptions: { exact: true }
      //             },
      //             {
      //               type: 'link',
      //               label: 'Tabbed',
      //               route: '/ui/page-layouts/simple/tabbed',
      //             },
      //             {
      //               type: 'link',
      //               label: 'Large Header',
      //               route: '/ui/page-layouts/simple/large-header',
      //               routerLinkActiveOptions: { exact: true }
      //             },
      //             {
      //               type: 'link',
      //               label: 'Tabbed & Large Header',
      //               route: '/ui/page-layouts/simple/large-header/tabbed'
      //             }
      //           ]
      //         },
      //         {
      //           type: 'link',
      //           label: 'Blank',
      //           icon: icPictureInPicture,
      //           route: '/ui/page-layouts/blank'
      //         },
      //       ]
      //     },
      //   ]
      // },
      // {
      //   type: 'subheading',
      //   label: 'Documentation',
      //   children: [
      //     {
      //       type: 'link',
      //       label: 'Changelog',
      //       route: '/documentation/changelog',
      //       icon: icUpdate
      //     },
      //     {
      //       type: 'dropdown',
      //       label: 'Getting Started',
      //       icon: icBook,
      //       children: [
      //         {
      //           type: 'link',
      //           label: 'Introduction',
      //           route: '/documentation/introduction',
      //           fragment: 'introduction',
      //           routerLinkActiveOptions: { exact: true }
      //         },
      //         {
      //           type: 'link',
      //           label: 'Folder Structure',
      //           route: '/documentation/folder-structure',
      //           fragment: 'folder-structure',
      //           routerLinkActiveOptions: { exact: true }
      //         },
      //         {
      //           type: 'link',
      //           label: 'Installation',
      //           route: '/documentation/installation',
      //           fragment: 'installation',
      //           routerLinkActiveOptions: { exact: true }
      //         },
      //         {
      //           type: 'link',
      //           label: 'Development Server',
      //           route: '/documentation/start-development-server',
      //           fragment: 'start-development-server',
      //           routerLinkActiveOptions: { exact: true }
      //         },
      //         {
      //           type: 'link',
      //           label: 'Build for Production',
      //           route: '/documentation/build-for-production',
      //           fragment: 'build-for-production',
      //           routerLinkActiveOptions: { exact: true }
      //         }
      //       ]
      //     },
      //     {
      //       type: 'dropdown',
      //       label: 'Customization',
      //       icon: icBook,
      //       children: [
      //         {
      //           type: 'link',
      //           label: 'Configuration',
      //           route: '/documentation/configuration',
      //           fragment: 'configuration',
      //           routerLinkActiveOptions: { exact: true }
      //         },
      //         {
      //           type: 'link',
      //           label: 'Changing Styling',
      //           route: '/documentation/changing-styling-and-css-variables',
      //           fragment: 'changing-styling-and-css-variables',
      //           routerLinkActiveOptions: { exact: true }
      //         },
      //         {
      //           type: 'link',
      //           label: 'Using Custom Colors',
      //           route: '/documentation/using-custom-colors-for-the-primarysecondarywarn-palettes',
      //           fragment: 'using-custom-colors-for-the-primarysecondarywarn-palettes',
      //           routerLinkActiveOptions: { exact: true }
      //         },
      //         {
      //           type: 'link',
      //           label: 'Adding Menu Items',
      //           route: '/documentation/adding-menu-items',
      //           fragment: 'adding-menu-items',
      //           routerLinkActiveOptions: { exact: true }
      //         },
      //       ]
      //     },
      //     {
      //       type: 'link',
      //       label: 'Further Help',
      //       icon: icBook,
      //       route: '/documentation/further-help',
      //       fragment: 'further-help',
      //       routerLinkActiveOptions: { exact: true }
      //     },
      //   ]
      // },
      // {
      //   type: 'subheading',
      //   label: 'Customize',
      //   children: []
      // },
      {
        type: 'link',
        label: 'Settings',
        route: () => this.layoutService.openConfigpanel(),
        icon: icSettings
      }
    ];
  }
}
