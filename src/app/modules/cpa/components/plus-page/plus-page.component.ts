import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../auth/services/auth.service';
import { CategoryService } from '../../services/category.service';
import { User } from '../../../../models/user.interface';

@Component({
  selector: 'app-plus-page',
  templateUrl: './plus-page.component.html',
  styleUrls: ['./plus-page.component.sass']
})
export class PlusPageComponent implements OnInit {
  private mainColor = 'green';
  private status = true;
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
