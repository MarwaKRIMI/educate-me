import { ChangeDetectorRef, Component, OnInit, Input } from '@angular/core';
import icGroup from '@iconify/icons-ic/twotone-group';
import icPageView from '@iconify/icons-ic/twotone-pageview';
import icCloudOff from '@iconify/icons-ic/twotone-cloud-off';
import icTimer from '@iconify/icons-ic/twotone-timer';
import { defaultChartOptions } from '../../../../@vex/utils/default-chart-options';
import { Order, tableSalesData } from '../../../../static-data/table-sales-data';
import { TableColumn } from '../../../../@vex/interfaces/table-column.interface';
import icMoreVert from '@iconify/icons-ic/twotone-more-vert';
import icShare from '@iconify/icons-ic/twotone-share';
import icFavorite from '@iconify/icons-ic/twotone-favorite';
import icthumb_up_alt from '@iconify/icons-ic/twotone-thumb-up-alt';





import icMail from '@iconify/icons-ic/twotone-mail';
import icAccessTime from '@iconify/icons-ic/twotone-access-time';
import icAdd from '@iconify/icons-ic/twotone-add';
import icWhatshot from '@iconify/icons-ic/twotone-whatshot';
import icWork from '@iconify/icons-ic/twotone-work';
import icPhone from '@iconify/icons-ic/twotone-phone';
import icPersonAdd from '@iconify/icons-ic/twotone-person-add';
import icCheck from '@iconify/icons-ic/twotone-check';
import icAddAPhoto from '@iconify/icons-ic/twotone-add-a-photo';
import icPhotoFilter from '@iconify/icons-ic/twotone-photo-filter';
import icAttachFile from '@iconify/icons-ic/twotone-attach-file';
import icKeyboardArrowRight from '@iconify/icons-ic/twotone-keyboard-arrow-right';
import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';
import { fadeInRight400ms } from 'src/@vex/animations/fade-in-right.animation';
import { scaleIn400ms } from 'src/@vex/animations/scale-in.animation';
import { stagger40ms } from 'src/@vex/animations/stagger.animation';
import icComment from '@iconify/icons-ic/twotone-comment';
import iccloud_download from '@iconify/icons-ic/twotone-cloud-download';

@Component({
  selector: 'vex-dashboard-analytics',
  templateUrl: './dashboard-analytics.component.html',
  styleUrls: ['./dashboard-analytics.component.scss'],
  animations: [
    fadeInUp400ms,
    fadeInRight400ms,
    scaleIn400ms,
    stagger40ms
  ]
})
export class DashboardAnalyticsComponent implements OnInit {
  icShare = icShare;
  icFavorite = icthumb_up_alt;
  
  @Input() avatarUrl: string;
  @Input() name: string;
  @Input() time: string;
  @Input() imageUrl: string;
  @Input() likes: number;
  @Input() comments: number;
//   listHTML =
//     `<mat-list class="list mat-elevation-z1">
//   <h3 mat-subheader>Contacts</h3>
//   <mat-list-item>
//     <img mat-list-avatar src="assets/img/avatars/1.jpg">
//     <h3 matLine>John</h3>
//     <p matLine>
//       <span>Brunch?</span>
//       <span class="subline">-- Did you want to go on Sunday? I was thinking</span>
//     </p>
//   </mat-list-item>
//   <mat-list-item>
//     <img mat-list-avatar src="assets/img/avatars/2.jpg">
//     <h3 matLine>Peter</h3>
//     <p matLine>
//       <span>Summer BBQ</span>
//       <span class="subline">-- Wish I could come, but I have some special</span>
//     </p>
//   </mat-list-item>
//   <mat-list-item>
//     <img mat-list-avatar src="assets/img/avatars/3.jpg">
//     <h3 matLine>Nancy</h3>
//     <p matLine>
//       <span>Oui oui</span>
//       <span class="subline">-- Have you booked the Paris trip?</span>
//     </p>
//   </mat-list-item>
//   <mat-divider></mat-divider>
//   <h3 mat-subheader>Other</h3>
//   <mat-list-item>
//     <img mat-list-avatar src="assets/img/avatars/4.jpg">
//     <h3 matLine>Frank</h3>
//     <p matLine>
//       <span>Pretty decent!</span>
//       <span class="subline">-- You look pretty... decent!</span>
//     </p>
//   </mat-list-item>
//   <mat-list-item>
//     <img mat-list-avatar src="assets/img/avatars/5.jpg">
//     <h3 matLine>Donald</h3>
//     <p matLine>
//       <span>That's great!</span>
//       <span class="subline">-- Great work mate!</span>
//     </p>
//   </mat-list-item>
// </mat-list>`;
  icComment = icComment;
  icDownload = iccloud_download


  icWork = icWork;
  icPhone = icPhone;
  icPersonAdd = icPersonAdd;
  icCheck = icCheck;
  icMail = icMail;
  icAccessTime = icAccessTime;
  icAdd = icAdd;
  icWhatshot = icWhatshot;
  icAddAPhoto = icAddAPhoto;
  icPhotoFilter = icPhotoFilter;
  icAttachFile = icAttachFile;
  icKeyboardArrowRight = icKeyboardArrowRight;
  checkboxHTML =
  ``;
  tableColumns: TableColumn<Order>[] = [
    {
      label: '',
      property: 'status',
      type: 'badge'
    },
    {
      label: 'PRODUCT',
      property: 'name',
      type: 'text'
    },
    {
      label: '$ PRICE',
      property: 'price',
      type: 'text',
      cssClasses: ['font-medium']
    },
    {
      label: 'DATE',
      property: 'timestamp',
      type: 'text',
      cssClasses: ['text-secondary']
    }
  ];
  tableData = tableSalesData;

  series: ApexAxisChartSeries = [{
    name: 'Subscribers',
    data: [28, 40, 36, 0, 52, 38, 60, 55, 67, 33, 89, 44]
  }];

  userSessionsSeries: ApexAxisChartSeries = [
    {
      name: 'Users',
      data: [10, 50, 26, 50, 38, 60, 50, 25, 61, 80, 40, 60]
    },
    {
      name: 'Sessions',
      data: [5, 21, 42, 70, 41, 20, 35, 50, 10, 15, 30, 50]
    },
  ];

  salesSeries: ApexAxisChartSeries = [{
    name: 'Sales',
    data: [28, 40, 36, 0, 52, 38, 60, 55, 99, 54, 38, 87]
  }];

  pageViewsSeries: ApexAxisChartSeries = [{
    name: 'Page Views',
    data: [405, 800, 200, 600, 105, 788, 600, 204]
  }];

  uniqueUsersSeries: ApexAxisChartSeries = [{
    name: 'Unique Users',
    data: [356, 806, 600, 754, 432, 854, 555, 1004]
  }];

  uniqueUsersOptions = defaultChartOptions({
    chart: {
      type: 'area',
      height: 100
    },
    colors: ['#ff9800']
  });

  icGroup = icGroup;
  icPageView = icPageView;
  icCloudOff = icCloudOff;
  icTimer = icTimer;
  icMoreVert = icMoreVert;

  constructor(private cd: ChangeDetectorRef) { }

  ngOnInit() {
    setTimeout(() => {
      const temp = [
        {
          name: 'Subscribers',
          data: [55, 213, 55, 0, 213, 55, 33, 55]
        },
        {
          name: ''
        }
      ];
    }, 3000);
  }

}
