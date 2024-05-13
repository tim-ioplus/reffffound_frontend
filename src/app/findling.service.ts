import { Injectable } from '@angular/core';
import { FINDLINGS } from './mock-findlings';
import { Findling } from './findling';

@Injectable()
export class FindlingService 
{
    list(): Findling[]{ return FINDLINGS} //param page num, take 10
}