import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FlatTreeControl } from '@angular/cdk/tree';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';


interface FoodNode {
  name: string;
  children?: FoodNode[];
}

interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}

const TREE_DATA: FoodNode[] = [
  {
    name: 'Tài khoản',
    children: [
      { name: 'Thông tin tài khoản' },
      { name: 'Thay đổi mật khẩu' },
      { name: 'Đăng xuất' },
    ]
  }, {
    name: 'Quản lý người sử dụng',
    children: [

      { name: 'Cấu hình nhóm người sử dụng' },
      { name: 'Danh sách người sử dụng' },
      { name: 'Thêm người sử dụng' },


    ]
  },
  {
    name: 'Thông tin cấu hình',
    children: [

      { name: 'Cấu hình trường học' },
      { name: 'Cấu hình năm học' },
      { name: 'Cấu hình học kỳ' },
      { name: 'Cấu hình tiết học' },
      { name: 'Cấu hình khối' },
      { name: 'Khai báo tổ bộ môn' },
      {name:'Khai báo môn học theo trường'}


    ]
  },
  {
    name: 'Quản lý lớp học',
    children: [

      { name: 'Danh sách lớp học' },
      { name: 'Danh sách học sinh theo lớp học' },
      { name: 'Danh sách môn học theo lớp' }, 
    ]
  },
]
;



@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  private _transformer = (node: FoodNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
    };
  }

  treeControl = new FlatTreeControl<ExampleFlatNode>(
    node => node.level, node => node.expandable);

  treeFlattener = new MatTreeFlattener(
    this._transformer, node => node.level, node => node.expandable, node => node.children);

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  constructor(
    private router: Router,



  ) { this.dataSource.data = TREE_DATA; }

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;
  // public isCollapsed = false;//collapse
  avatar: any = {};

  ngOnInit(): void {
    this.avatar.url = 'https://i.9mobi.vn/cf/images/ba/2018/4/16/anh-avatar-dep-4.jpg';
  }
  goBack() {
    this.router.navigate(['']);
  }

}
