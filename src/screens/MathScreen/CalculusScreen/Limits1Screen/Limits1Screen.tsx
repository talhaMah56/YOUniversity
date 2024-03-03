import React from "react";

export const Limits1Screen: React.FC = () => {

  return (
    <>
      <h1 className="subject-screen-header">Limits</h1>
      <div className="subject-page-grid">
        <div>
        <div className="text-lesson">

          <h2 className="sub-header">What is a limit?</h2>


            <p className="general-text">Calculus is all around us, take the concept of what you know about math out of your brain. Up to this point we’ve only looked at where something starts and where it ends after a certain amount of time. Say we take our nice shiny lamborghini for a spin, things are all fun and dandy. Our speedometer tells us we’re driving 60 miles per hour, we’re zooming. Using the algebra we’ve learned up to this point we know we can find velocity by taking our distance traveled and dividing by the amount of time it took for us to get from point a to point b. </p>

            
            <p className="general-text">Our lamborghini is zooming, the vibes are good until we see a cop on the side of the road and the speed limit is a measly 30. In panic we press on the brakes to lower our speed to an amount the cop won’t be too angry at. As we’re breaking we slow down to 45 mph which unfortunately wasn’t low enough to fool the cop. His lights turn on and he pulls us over. The story doesn’t get much better from here but let’s take a step back. What if we wanted to calculate this change of speed so next time we knew how much to decelerate before encountering the cop. If we plot our data onto a graph we get something like this.
            </p>
            <img id='first-graph-lim1' src={require("../../../../images/first-graph-lim1.PNG")}/>

          <p className="general-text">
          Normally our velocity will just be the Slope of our displacement during a period of time. However when looking at acceleration we are looking at the change in our velocity in a given period of time. Let’s plot our velocity on a graph where we can see it changing as time goes on. Following our regular course of action, we take two points on the line and try to use our regular method of finding a slope but notice the line isn’t straight. 

          </p>
            <img id='first-graph-lim1' src={require("../../../../images/specified-graph1.PNG")}/>

          <p className="general-text">
          What if we take an even smaller point in between these points? The line will look a lot closer to being straight? This is the essence of a limit. We keep breaking down our points of reference so small to where they are measurable. The difference in between these points is so small it approaches 0 but doesn’t quite get there. This is what we mean when we are taking the limit of a number. We want to see what the rate of change is in that split second we are able to calculate. 

          <p className="general-text">Let’s try representing this in a formal sense</p>

          <img id='lim-notation' src={require("../../../../images/lim-notation.png")}/>


          <img id='lil-graph' src={require("../../../../images/example-chart.png")}/>

          <p className="general-text">as we can see we are trying to measure our values as we approach 3. As we get closer and closer to 3 our y value gets closer to a value we can actually use. In this example we can see as our x value approaches the limit of 3(meaning we get ever so close to 3 without touching it) our f(x) is 8.</p>


          <h2 className="sub-header">Visualizing with Graphs</h2>


          <img id='lil-graph' src={require("../../../../images/lim1-p1.png")}/>
          <img id='lil-graph' src={require("../../../../images/lim1-p2.png")}/>
          <img id='lil-graph' src={require("../../../../images/lim-p4.png")}/>
          <img id='lil-graph' src={require("../../../../images/lim-p3.png")}/>
          <p className="general-text">as we can see we are trying to measure our values as we approach 3. As we get closer and closer to 3 our y value gets closer to a value we can actually use. In this example we can see as our x value approaches the limit of 3(meaning we get ever so close to 3 without touching it) our f(x) is 8.</p>


          <p className="general-text">In the previous example we showed a chart of x values approaching 3 with respect to f(x). Here we have a graph that is approaching x=2, as we can see the values get closer and closer to 2 so we can assume that the limit as x approaches 2 is 4. Here we can see that the line approaches y=4 as x approaches 2 from both sides. This is an important feature of a limit that we will look into.
          </p>

          </p>
        </div>
        </div>
      </div>
    </>
    );
};
