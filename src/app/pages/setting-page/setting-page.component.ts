import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { AuthService } from '@auth0/auth0-angular';
import { PokeApiService } from '../../services/poke-api.service';

@Component({
  selector: 'app-setting-page',
  imports: [],
  templateUrl: './setting-page.component.html',
  styleUrl: './setting-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SettingPageComponent {
  private readonly authService = inject(AuthService);
  private readonly pokeApiService = inject(PokeApiService);

  user = toSignal(this.authService.user$);
  isAuthenticated = toSignal(this.authService.isAuthenticated$);
  pokemonJpName = this.pokeApiService.fetchPokemonJpName('bulbasaur');
  pokemon = this.pokeApiService.fetchPokemon('bulbasaur');

  logout() {
    this.authService.logout({
      logoutParams: { returnTo: window.location.origin },
    });
  }
}
