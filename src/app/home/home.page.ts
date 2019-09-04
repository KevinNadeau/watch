import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environement } from '../../models/environements';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  nom: string;
  description: string;

  constructor(private http: HttpClient) {
    this.loadArticles();
}

  loadArticles(): void {
    const url = `${environement.api_url}/Articles`;
    console.log('url', url);
    this.http.get(url)
    .subscribe(articles => console.log ('articles', articles));
  }

  insertArticle(): void {
    const url = `${environement.api_url}/Articles`;
    this.http.post(url, { nom: this.nom, description: this.description })
      .subscribe(results => console.log('results', results));
  }

  updateArticle(): void {
    const id = '5d6ede6c5c857640706ac8a4';
    const url =  `${environement.api_url}/Articles/${id}`;
    this.http.patch(url, {nom: 'Alarme intelligente'})
      .subscribe(result => console.log('result', result));
  }

  removeArticle(): void {
    const id = '5d6f079b3eb1ad36683cd2e4';
    const url =  `${environement.api_url}/Articles/${id}`;
    this.http.delete(url)
      .subscribe(result => console.log('result', result));
  }

}
