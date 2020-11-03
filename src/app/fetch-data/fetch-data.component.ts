import { Component, Inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { element } from 'protractor';
import { FacultyDetails } from '../faculty-details/faculty-details.component';

@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html'
})
export class FetchDataComponent implements OnInit {
  id: number;
  private sub: any;
    tempFacultyDetails: any;
  constructor(private route: ActivatedRoute) { }
  facultyInfo: FacultyDetail[];
  ngOnInit() {

  this.tempFacultyDetails= [
    {
      id: 1, Name: 'Dr. D.Mannie', DOB: "11/11/1980", Qualification: "Ph.D", Designation: "Head of the Department",
      Email: "minnie@mcc.com", Contact: "9876543210", TotalYrsOfExp: 10, NoOfYrsOfExpMCC: 5, NoOfNationalCon: 4,
      NoOfInterNationalCon: 2, NoOfPublications: 3, NoOfPubJournal: 2, NoOfConProceedings: 2, ImagePath: "assets/images/minnie.jpg"
    },
    {
      id: 2, Name: 'Feminna Sheeba', DOB: "11/11/1980", Qualification: "MCA", Designation: "Assistant Proffesor",
      Email: "Femina@mcc.com", Contact: "9876543210", TotalYrsOfExp: 10, NoOfYrsOfExpMCC: 5, NoOfNationalCon: 4,
      NoOfInterNationalCon: 2, NoOfPublications: 3, NoOfPubJournal: 2, NoOfConProceedings: 2, ImagePath: "assets/images/femina.jpg"
    },
    {
      id: 3, Name: 'Ms. Johanna Johnsi Rani G', DOB: "11/11/1980", Qualification: "MCA", Designation: "Assistant Proffesor",
      Email: "Johanna@mcc.com", Contact: "9876543210", TotalYrsOfExp: 10, NoOfYrsOfExpMCC: 5, NoOfNationalCon: 4,
      NoOfInterNationalCon: 2, NoOfPublications: 3, NoOfPubJournal: 2, NoOfConProceedings: 2, ImagePath: "assets/images/johanna.jpg"
    },
    {
      id: 4, Name: 'Mr. Christopher Charles', DOB: "11/11/1980", Qualification: "MCA", Designation: "Assistant Proffesor",
      Email: "Christopher@mcc.com", Contact: "9876543210", TotalYrsOfExp: 10, NoOfYrsOfExpMCC: 5, NoOfNationalCon: 4,
      NoOfInterNationalCon: 2, NoOfPublications: 3, NoOfPubJournal: 2, NoOfConProceedings: 2, ImagePath: "assets/images/christopher.jpg"
    },
    {
      id: 5, Name: 'Mrs. Shiny Priyadarshini J', DOB: "11/11/1980", Qualification: "MCA", Designation: "Assistant Proffesor",
      Email: "Shiny@mcc.com", Contact: "9876543210", TotalYrsOfExp: 10, NoOfYrsOfExpMCC: 5, NoOfNationalCon: 4,
      NoOfInterNationalCon: 2, NoOfPublications: 3, NoOfPubJournal: 2, NoOfConProceedings: 2, ImagePath: "assets/images/shiny.jpg"
    },
    {
      id: 6, Name: 'Mrs. Felicia Rajathi P', DOB: "11/11/1980", Qualification: "MCA", Designation: "Assistant Proffesor",
      Email: "Felicia@mcc.com", Contact: "9876543210", TotalYrsOfExp: 10, NoOfYrsOfExpMCC: 5, NoOfNationalCon: 4,
      NoOfInterNationalCon: 2, NoOfPublications: 3, NoOfPubJournal: 2, NoOfConProceedings: 2, ImagePath: "assets/images/felicia.jpg"
    }
  ];

 
    debugger;
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];

      this.facultyInfo = this.tempFacultyDetails.filter(element => {
        return element.id == this.id;
      });
      debugger;

    });
  }

}

interface FacultyDetail {
  id: number;
}

