import React, { useRef } from "react";
import "../styles/GalleryPage.css";
import ConFront from "../images/Con_Front.jpg";
import PulpoYPapas from "../images/gallerypics/PulpoYPapas.jpeg";
import PokeTacos from "../images/gallerypics/PokeTacosTemp.jpg";
import CremeBrulee from "../images/gallerypics/Creme Brulee.jpeg";
import FlashCard from "./Flashcard"; // Import the flash card component
import { SiTiktok, SiInstagram } from "react-icons/si";
import { FiPhone, FiMail } from "react-icons/fi";

const GalleryPage = () => {
  const form = useRef();

  return (
    <div className="gallerypage" id="gallery">
      {/* <section className="page-header">
        <h1>Gallery Page</h1>
      </section> */}

      <section className="gallery-item">
        <FlashCard
          frontText="Hello, Front Side!"
          backText="Pulpo Y Papas

Ingredients

Octopus (ideally pre-steamed from your fishmonger)
3 Large Russet Potatoes
5-6 Ripe Tomatillos
½ White Onion
1 Jalapeno 
1 Cup Unpacked Cilantro
Juice from 1 Lime
1 Clove Garlic
1 Ripe Avocado

For the Salsa

1. Roast your Tomatillos, Onions & Seeded Jalapeno over direct flame until lightly charred
2. Add Tomatillos, Onions, Jalapeno, Cilantro, Garlic, Lime Juice, & Avocado to a food processor and blend.
3. Salt to taste

For the Potatoes

1. Use a sheet cutter to slice sheets off potatoes around 24 inches long and directly add to cold water

2. Roll potato sheets up tightly and tie with twine

3. Par-boil potato rolls until tender on a light simmer (around 5-10 minutes)

4. Remove from water and let air dry on a sieve

5. Add twine to potato rolls around ¾ inches from one another and slice into even pieces

6. Deep fry in vegetable oil (around 375 F) until golden brown

7. Add salt

For the Octopus

1.This recipe calls for pre-steamed or boiled octopus which is generally what you’d receive from a fish monger, however, if your octopus is raw please precook accordingly.

2. Grill Octopus tentacles over a high flame until it becomes lightly charred.

3. Salt to taste 
"
          backgroundImage={PulpoYPapas}
        />
      </section>
      <section className="gallery-item">
        <FlashCard
          id="flashcard"
          frontText="Hello, Front Side!"
          backText="Poke Tacos
          
Ingredients

For the Poke:
1 Pound Tuna (Ahi, Blue Fin, or Yellow Fin)
2 Tbsp Sesame Oil
1 Clove Garlic Grated
½ tbsp grated ginger
1 cup chopped green onions
1 tbsp sriracha (more if you like it spicy)
1 tbsp soy sauce
1 sweet onion
1 tbsp sesame seeds (I like a mix between black and white)

For the taco shells:
12 Round wonton wrappers
3-4 cups canola or vegetable oil

For the Wasabi Aioli
½ a cup of Japanese Mayonnaise 
⅛ cup of sriracha
1 tsp of sesame oil
2 tsp of wasabi powder (more if you want more kick)


1. Roughly chop sweet onion and green onions. Traditional Poke calls for sliced onions but in order to fit in the taco shells we’ll do a rough chop. Grate garlic and ginger and mix in a bowl with the onions and sesame seeds. Add the soy sauce and mix thoroughly, set aside for now. 

2. Grab your Tuna and cut in roughly ½ inch cubes, add to the bowl and mix in your sesame oil and sriracha. Salt to taste. Leave your poke in the fridge for a few hours to soak in all the flavor.

3. Heat your oil in a deep pan to 375 degrees F. Add one wonton wrapper at a time. Once you place the wrapper in the hot oil it will flare up quickly. Once it folds back down, use a cannoli pipe and tongs to press down on the wrapper in the oil so it folds back up and shapes around the cannoli pipe. After about 30 seconds the fold should stay. Flip the taco shell and fry the other side. Fry all sides until golden brown, make sure the opening is large enough to hold a good amount of poke. Place on a cooling rack to let the oil drain and cool. Repeat until you have enough shells. 

4. To plate I like to put a dollop of guacamole on a plate, then prop the taco up on the guacamole. Mix ingredients for wasabi aioli and drizzle on tacos. 
"
          backgroundImage={PokeTacos}
        />
      </section>
      <section className="gallery-item">
        <FlashCard
          id="flashcard"
          frontText="Hello, Front Side!"
          backText="Peanut Butter Crème Brûlée

Ingredients 

For the Custard:
50 g peanut butter with no sugar added
1 Cup Heavy Whipping Cream
1 Cup whole milk
6 large egg yolks
1 vanilla bean pod
1 cup sugar (plus extra for coating)

For the Fruit Sauce:
¼ cup Screwball Peanut Butter Whiskey
2 tbsp butter
5 tbsp sugar
½ cup blueberries
½ cup strawberries

1. Preheat Oven to 325 F

2. Slice vanilla pods in half lengthwise. Scrape out the beans and add beans and empty pods to cream in a saucepan. Bring to a gentle boil, be sure to keep a close eye and stir or else your cream will scorch. Turn off heat, cover, and let steep for 15 minutes.

3. In a mixing bowl, whisk egg yolks, sugar, and peanut butter together. Once the cream has steeped and is slightly cooled slowly add to the yolk mixture. Be sure to add slowly while whisking to prevent eggs from scrambling. This process is called tempering and will keep the custard together while cooking. 

4. Once combined, pour equal parts of your custard into ramekins. Place ramekins in a casserole dish with boiling water. This is called a water bath and helps gently and evenly cook your custard. 

5. Place your dish in the preheated oven for 30-35 minutes, or until the centers have just slightly set and still giggle when the ramekin is tapped. 

6. Remove your creme brulees, cover with a tea towel and let cool at room temp for approximately 1 hour. Once cooled, place in the fridge for at least another hour or two.

7. When ready to serve, sprinkle a tablespoon of sugar on top of your creme brulees and using a torch, melt the sugar on top. It will liquify and you want it to turn slightly brown. Once all melted, set aside to harden. 

8. While the sugar is cooling, melt a tablespoon of butter in a pan, add a tablespoon of sugar and combine. Add your berries and mix while the pan is getting hot. Remove the pan from your cooktop and add your Screwball. The whiskey should begin to evaporate. Very carefully return the pan to the stove and slightly tilt to expose the whiskey vapor to the flame. This is called a flambe and it helps burn the alcohol off. There may be a decently large fireball that you will keep local to the pan. Please note this step is dangerous and should only be performed in a controlled setting with experienced cooks. If this part is intimidating you can always let the rum boil off away from the heat source to remove the alcohol prior to returning the pan to the stove.

9. Once whiskey is reduced you will be left with softened berries in a beautiful purple sauce. Add a few berries to your creme brulee and spoon some sauce atop. Garnish with small mint leaves and serve. 
"
          backgroundImage={CremeBrulee}
        />
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <a
            href="https://www.tiktok.com/@caviarcon?_t=8qDxp0BJ4yl&_r=1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiTiktok />
          </a>
          <a
            href="https://instagram.com/connormcglynn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiInstagram />
          </a>
          <a href="mailto:connor@caviarcon.com">
            <FiMail />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default GalleryPage;
