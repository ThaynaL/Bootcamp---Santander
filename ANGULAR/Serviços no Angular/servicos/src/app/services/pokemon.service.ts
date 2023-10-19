import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { PokemonData } from '../models/PokemonData';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private baseURL:string = "";
  private pokeData:PokemonData | any;

  constructor(private http:HttpClient) { 
    this.baseURL = environment.pokeAPI;
  }

  getPokemon(pokemonNome:string) Observable<PokemonData>{
    this.pokeData = this.http.get<PokemonData>(`${this.baseURL} ${pokemonNome}`);
    return this.pokeData;
  }
  
}
