import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { PokeApiService } from '../../services/poke-api.service';
import { UuidService } from '../../services/uuid.service';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrl: './about-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutPageComponent {
  private readonly uuidService = inject(UuidService);
  private readonly pokeApiService = inject(PokeApiService);

  uuid = this.uuidService.fetchUuid();
  pokemonJpName = this.pokeApiService.fetchPokemonJpName('pikachu');
  pokemon = this.pokeApiService.fetchPokemon('pikachu');
}
