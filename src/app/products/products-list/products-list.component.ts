import { Component } from "@angular/core";

@Component({
  selector: 'products-list',
  templateUrl: './products-list.component.html'
})

export class ProductListComponent {
  pageTitle: string = "Products List"
  products: any [] = [
    {
      'partNumber': '36560-NSDVZXA-476-MYSTE',
      'name': 'Mysterious Surface Photometry Realtor',
      'price': '3.14',
      'unit': 'coulomb (C)',
      'photopath': 'http://www.AngrodPersonalAssistant.com/Conscious.yup',
      'vendor': '688',
    },
    {
      'partNumber': 'GOR-1040-MJFGRKBB-843',
      'name': 'Gorgeous Speckle Interferometry Marion',
      'price': '1.08',
      'unit': 'kilobtu per square foot (kBTU/ft²)',
      'photopath': 'https://www.KementariCreditUnion.com/Spec kle.jpeg',
      'vendor': '1173',
    },
    {
      'partNumber': '8068400-AQNXUDD-687-STAT',
      'name': 'Static Zeipel Theorem Administrator',
      'price': '2.64',
      'unit': 'square millimeter (mm²)',
      'phtopath': 'https://www.SulimoHomeInspection.com/Theorem/Static.jpg',
      'vendor': '204'
    },
    {
      'partNumber':'87840-BJGEZTW-475-DELICI',
      'name': 'Delicious Supersymmetric Gauge Theory Ejaculation',
      'price': '6.67',
      'unit': 'imperial gallon (galUK)',
      'phtopath': 'http://www.AngrodPersonalAssistant.com/Conscious.yup',
      'vendor': '2537'
    },
    {
      'partNumber':'157240-RVSFI-717-CURI',
      'name': 'Curious Friction',
      'price':  '2',
      'unit': 'farad (F)',
      'phtopath':'https://www.BrandybuckEventPlanning.com/Curious/Friction.bmp',
      'vendor': '574'
    },
    {
      'partNumber': 'FAB-PHKZKP-2044-1725670',
      'name': 'Fabulous Quantum Cosmology Vacation',
      'price':  '4.67',
      'unit': 'megajoules per hour (MJ/h)',
      'phtopath':'http://www.AngrodPersonalAssistant.com/Conscious.yup',
      'vendor': '3804'
    }
  ]
}
