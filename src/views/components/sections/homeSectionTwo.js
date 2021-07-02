import BackgroundTwo from '../../../assets/images/backgrounds/bg-2.png';
import Vader from '../../../assets/images/elements/vader.png';
import Footer from '../../footer/footer';

let TextContent = `Lucas ipsum dolor sit amet luke sidious jango cade mace palpatine jawa wookiee wookiee kashyyyk. Dantooine calrissian r2-d2 calamari coruscant skywalker ewok. Darth fett moff endor twi'lek windu obi-wan luuke. Alderaan hutt hoth moff zabrak moff organa calamari. Ackbar mustafar wedge padmé mandalorians solo secura moff jar. Jawa luuke hutt organa jango jinn. Boba jabba kenobi moff luuke qui-gonn thrawn. Twi'lek yoda mace luke vader boba. Mace kessel darth antilles jabba. Luke hoth organa leia anakin skywalker leia ponda.<br><br>
Moff ahsoka yavin calamari. Chewbacca skywalker yoda organa kit organa. Hutt hutt twi'lek binks. Amidala darth lando mon. Grievous solo secura mandalore bespin chewbacca sebulba cade. Gamorrean palpatine organa organa yoda hutt antilles. C-3p0 luke skywalker luke mara mara gonk antilles gamorrean. Mara moff wookiee jinn dantooine skywalker qui-gon. Kashyyyk c-3po watto organa. Droid tusken raider aayla moff thrawn darth tusken raider. Binks cade antilles ahsoka. Yoda c-3p0 dantooine antilles secura organa calamari.`;

let HomeSectionTwo = `
    <section class="section section__background--two" style="background-image: url('${BackgroundTwo}')" id='section-two'>
        <div class='container section__block--two'>
            <img src='${Vader}' alt='Dart Vader'>
            <div class='text-content'>
                <p>${TextContent}</p>
            </div>
        </div>    
        ${Footer}
    </section>
`;

export default HomeSectionTwo;
