import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { AuthService } from '../../../auth/services/auth.service';
import { User } from '../../../../models/user.interface';

@Component({
  selector: 'app-minus-page',
  templateUrl: './minus-page.component.html',
  styleUrls: ['./minus-page.component.sass']
})
export class MinusPageComponent implements OnInit {
  private mainColor = 'red';
  private status = false;
  private user: User;

  constructor(private auth: AuthService, private categoryService: CategoryService) { }

  ngOnInit() {
    AuthService.userOnline$.subscribe(item => {
      this.user = Object.assign({}, item.user);
    });
    this.categoryService.id = this.user.id;
    this.categoryService.status = this.status;
  }
}
