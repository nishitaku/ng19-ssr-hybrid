import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { PokeApiService } from '../../services/poke-api.service';
import { UuidService } from '../../services/uuid.service';

@Component({
  selector: 'app-setting-page',
  imports: [],
  templateUrl: './setting-page.component.html',
  styleUrl: './setting-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SettingPageComponent {
  private readonly uuidService = inject(UuidService);
  private readonly pokeApiService = inject(PokeApiService);

  uuid = this.uuidService.fetchUuid();
  pokemonJpName = this.pokeApiService.fetchPokemonJpName('2');
  pokemon = this.pokeApiService.fetchPokemon('2');
}
