import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PokeApiService } from '../../services/poke-api.service';
import { UuidService } from '../../services/uuid.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  imports: [RouterOutlet],
  styleUrl: './profile-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfilePageComponent {
  private readonly uuidService = inject(UuidService);
  private readonly pokeApiService = inject(PokeApiService);

  uuid = this.uuidService.fetchUuid();
  pokemonJpName = this.pokeApiService.fetchPokemonJpName('bulbasaur');
  pokemon = this.pokeApiService.fetchPokemon('bulbasaur');
}
