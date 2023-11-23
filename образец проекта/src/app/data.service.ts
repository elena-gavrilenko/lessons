import { Injectable, inject } from '@angular/core';
// описание модели
import { Product } from './model/model';
// для выполнения запросов
import { HttpClient, HttpHeaders } from '@angular/common/http';
// поддержка асинхронных запросов
import { Observable, from, of, pipe} from 'rxjs';
// для работы с firebase
import { 
  Firestore,
  collectionData,
  collection,
  DocumentReference,
  doc,
  getDoc,
  setDoc,
  updateDoc,
  deleteDoc
 } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  url: string = "http://localhost:3000/products";
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  type: string = "";
  products!: Observable<Product[]>;
  product!: Product;

  //firebase
  doc!: DocumentReference;
  firestore: Firestore = inject(Firestore);

    
  constructor(private http: HttpClient) {
    const itemCollection = collection(this.firestore, 'products');
    this.products = collectionData(itemCollection);
  }

  // для работы с json-server

  // getProducts(): Observable<Product[]> {
  //   return this.http.get<Product[]>(this.url);
  // }

  // getProduct(id: number): Observable<Product> {
  //   return this.http.get<Product>(`${this.url}/${id}`);
  // }

  // addProduct(product: Product): Observable<Product> {
  //   return this.http.post<Product>(this.url, product, this.httpOptions);
  // }

  // deleteProduct(id: number): Observable<Product> {
  //   return this.http.delete<Product>(`${this.url}/${id}`, this.httpOptions);
  // }

  // updateProduct(product: Product): Observable<Product> {
  //   return this.http.put(this.url, product, this.httpOptions);
  // }

  // для работы с категориями
  get Type() {
    return this.type;
  }

  set Type(value: string) {
    this.type = value;
  }

  // для работы с firebase

  getProducts(): Observable<Product[]> {
    return this.products;
  }

  async getProductFromDocumentReference(doc: DocumentReference): Promise<Product> {
    const item = await getDoc(this.doc);
    this.product = item.data() as Product;
    console.log(this.product);
    return new Promise<Product>((resolve) => resolve(this.product));
  }

  getProduct(id: number): Observable<Product> {
    this.doc = doc(this.firestore, `products/${id}`);
    // (async () => {
    //   const item = await getDoc(this.doc);
    //   this.product = item.data() as Product;
    //   console.log(this.product);
    // })();
    // getDoc(this.doc).then(data => {
    //   this.product = data.data() as Product;
    //   return of(this.product);
      
    // });
    return from(this.getProductFromDocumentReference(this.doc));
    
   
  }



  addProduct(product: Product): Observable<Product> {
    this.doc = doc(this.firestore, `products/${product.id}`);
    // setDoc(this.doc, {
    //   price: 777,
    //   img: 'assets/images/foto1.jpj',
    //   name: 'Ball',
    //   category: 'sport',
    //   description: 'Some ball'
    // });
    setDoc(this.doc, {...product}).then((data => {
      console.log('AddProduct');
    }));
    return of(product);
  }

  deleteProduct(id: number): Observable<Product> {
    this.doc = doc(this.firestore, `products/${id}`);
    getDoc(this.doc).then(data => {
      this.product = data.data() as Product;
      deleteDoc(this.doc);
    });
    return of(this.product);
  }

  updateProduct(product: Product): void {
    this.doc = doc(this.firestore, `products/${product.id}`);
    updateDoc(this.doc, {...product});
    
  }




}
