import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  cards = [
    {
      img: 'Get Paid Instantly.png',
      title: 'Quick cash disbursement',
      label: 'Get terms loanas that your business needs in 72hrs',
    },
    {
      img: 'Low interest rate.png',
      title: 'Low-interest rate',
      label:
        'Achieve your financial goals with an amazing interest rate starting at 13% per annum',
    },
    {
      img: 'Secure Payments.png',
      title: 'Zero Paperwork',
      label:
        'Get started instantly by submitting only your basic details & bank statements',
    },
    {
      img: 'freelancer_feature_icon_6@1.5x.png',
      title: 'Ace your business finances',
      label:
        'Zero EMI for first 3 months on Back-to-Business loans of upto 1 lakh',
    },
    {
      img: 'Covid.png',
      title: 'Loans to fight COVID-19',
      label: 'Get terms loanas that your business needs in 72hrs',
    },
  ];
  constructor() {}
  ngOnInit(): void {}
}
