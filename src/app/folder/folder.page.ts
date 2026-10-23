import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
  standalone: false
})
export class FolderPage implements OnInit {
  public folder!: string;
  public cep! : string;
  private activatedRoute = inject(ActivatedRoute);
  constructor(private router: Router) {}

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
  }

  pesquisar(){
    console.log(this.cep);
    // if(this.cep == '11704-900' || this.cep == '11704900') {
    //   console.log('Praia Grande')
    //   this.router.navigate(['/teste2'])
    // }
    // if(this.cep == '11088-190'|| this.cep == '11088190') {
    //   console.log('Santos')
    //   this.router.navigate(['/teste'])
    // }

    switch (this.cep) {
      case '11704900':
      case '11704-900':
        console.log('Praia Grande')
        this.router.navigate(['/praiagrande'])        
        break;
      case '11088190':
      case '11088-190':
        console.log('Santos')
        this.router.navigate(['/santos'])
        break;
      case '11250-021':
        console.log('Bertioga')
        this.router.navigate(['/bertioga'])
break;
      case '11410-385':
        console.log('Guaruja')
        this.router.navigate(['/guaruja'])
break;
      case '11088-190':
        console.log('São Vicente')
        this.router.navigate(['/saovicente'])
break;
      case '11531-430':
        console.log('Cubatão')
        this.router.navigate(['/cubatao'])
break;
      case '11709-000':
        console.log('Mongagua')
        this.router.navigate(['/mongagua'])
break;
      case '11740-972 ':
        console.log('Itanhaem')
        this.router.navigate(['/intanhaem'])
break;
      case '11770-000 ':
        console.log('peruibe')
        this.router.navigate(['/peruibe'])
      break;
        
      default:
        console.log('CEP não é da RMBS')
        break;
    }

  }


}
