import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  isFilterVisible = false

  categories = [
    {
      name: "Fresh Fruits & Vegetable",
      icon: "assets/images/cat-icon-3.png",
      color: "rgba(83, 177, 117, 0.1)"
    },
    {
      name: "Cooking Oil & Ghee",
      icon: "assets/images/cat-icon-1.png",
      color: "rgba(248, 164, 76, 0.1)"
    },
    {
      name: "Mean & Fish",
      icon: "assets/images/cat-icon-5.png",
      color: "rgba(247, 165, 147, 0.25)"
    },
    {
      name: "Bakery & Snacks",
      icon: "assets/images/cat-icon-4.png",
      color: "rgba(211, 176, 224, 0.25)"
    },
    {
      name: "Dairy & Eggs",
      icon: "assets/images/cat-icon-2.png",
      color: "rgba(253, 229, 152, 0.25)"
    },
    {
      name: "Beverages",
      icon: "assets/images/cat-icon-6.png",
      color: "rgba(183, 223, 245, 0.25)"
    },

  ]

  constructor() { }

  ngOnInit(): void {
  }

  toggleFilter() {
    this.isFilterVisible = !this.isFilterVisible
  }

}
