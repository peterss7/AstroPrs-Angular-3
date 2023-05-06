import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class DeletionService{

  /*
  private currentSelection$ = new BehaviorSubject<any>({});
  selectedCurrentSelection$ = this.currentSelection$.asObservable();
  */

  private currentSelection: boolean[] = [];

  constructor(
      private userService: UserService,
      private router: Router
    ) {}

    public setSelectedForDeletion(selectedIndexes: boolean[]): void {



      // this.currentSelection$.next(selectedIndexes);
      this.currentSelection = selectedIndexes;

      console.log(selectedIndexes);
      // console.log(this.currentSelection$);
    }

    public delete(targetType: string): void{

      console.log("target type: " + targetType);

      if (targetType == 'USER'){
        // console.log("target type: " + this.currentSelection$);
        console.log("array inside user target type: " + this.currentSelection);
        console.log("then array element: " + this.currentSelection[5]);

        var counter = 0;
        for (let selected of this.currentSelection){
          if (selected){
            this.userService.deleteUserById(counter);
            console.log(counter);

          }
          counter++;
        }

      }
    }


}
