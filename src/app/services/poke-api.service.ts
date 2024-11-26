import { HttpClient } from '@angular/common/http';
import { inject, Injectable, Signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { PokeAPI } from 'pokeapi-types';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokeApiService {
  private readonly http = inject(HttpClient);

  fetchPokemon(idOrName: string): Signal<PokeAPI.Pokemon | null> {
    return toSignal(
      this.http.get<PokeAPI.Pokemon>(
        `https://pokeapi.co/api/v2/pokemon/${idOrName}`
      ),
      { initialValue: null }
    );
  }

  fetchPokemonJpName(idOrName: string): Signal<string> {
    return toSignal(
      this.http
        .get<PokeAPI.PokemonSpecies>(
          `https://pokeapi.co/api/v2/pokemon-species/${idOrName}`
        )
        .pipe(
          map(
            (specy) =>
              specy.names.find((name) => name.language.name === 'ja-Hrkt')
                ?.name ?? ''
          )
        ),
      { initialValue: '' }
    );
  }
}
