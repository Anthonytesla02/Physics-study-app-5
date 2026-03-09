# 12.2 Bernoulli’s Equation

[Original URL](https://openstax.org/books/college-physics-2e/pages/12-2-bernoullis-equation)

## 12.2 Bernoulli’s Equation

### Learning Objectives

By the end of this section, you will be able to:

*   Explain the terms in Bernoulli’s equation.
*   Explain how Bernoulli’s equation is related to conservation of energy.
*   Explain how to derive Bernoulli’s principle from Bernoulli’s equation.
*   Calculate with Bernoulli’s principle.
*   List some applications of Bernoulli’s principle.

When a fluid flows into a narrower channel, its speed increases. That means its kinetic energy also increases. Where does that change in kinetic energy come from? The increased kinetic energy comes from the net work done on the fluid to push it into the channel and the work done on the fluid by the gravitational force, if the fluid changes vertical position. Recall the work-energy theorem,

Wnet\=12mv2−12 mv02.Wnet\=12mv2−12 mv02.

12.16

There is a pressure difference when the channel narrows. This pressure difference results in a net force on the fluid: recall that pressure times area equals force. The net work done increases the fluid’s kinetic energy. As a result, the _pressure will drop in a rapidly-moving fluid_, whether or not the fluid is confined to a tube.

There are a number of common examples of pressure dropping in rapidly-moving fluids. Shower curtains have a disagreeable habit of bulging into the shower stall when the shower is on. The high-velocity stream of water and air creates a region of lower pressure inside the shower, and standard atmospheric pressure on the other side. The pressure difference results in a net force inward pushing the curtain in. You may also have noticed that when passing a truck on the highway, your car tends to veer toward it. The reason is the same—the high velocity of the air between the car and the truck creates a region of lower pressure, and the vehicles are pushed together by greater pressure on the outside. (See [Figure 12.4](12-2-bernoullis-equation#import-auto-id1546552).) This effect was observed as far back as the mid-1800s, when it was found that trains passing in opposite directions tipped precariously toward one another.

![An overhead view of a car passing by a truck on a highway toward left is shown. The air passing through the vehicles is shown using lines along the length of both the vehicles. The lines representing the air movement has a velocity v one outside the area between the vehicles and velocity v two between the vehicles. v two is shown to be greater than v one with the help of a longer arrow toward right. The pressure between the car and the truck is represented by P i and the pressure at the other ends of both the vehicles is represented as P zero. The pressure P i is shown to be less than P zero by shorter length of the arrow. The direction of P i is shown as pushing the car and truck apart, and the direction of P zero is shown as pushing the car and truck toward each other.](/apps/image-cdn/v1/f=webp/apps/archive/20260105.231123/resources/07b9f0506e6caf39ae9f164e8e8def9901dd14ee)

Figure 12.4 An overhead view of a car passing a truck on a highway. Air passing between the vehicles flows in a narrower channel and must increase its speed (v2v2 is greater than v1v1), causing the pressure between them to drop (PiPi is less than PoPo). Greater pressure on the outside pushes the car and truck together.

Hold the short edge of a sheet of paper parallel to your mouth with one hand on each side of your mouth. The page should slant downward over your hands. Blow over the top of the page. Describe what happens and explain the reason for this behavior.

### Bernoulli’s Equation

The relationship between pressure and velocity in fluids is described quantitatively by Bernoulli’s equation, named after its discoverer, the Swiss scientist Daniel Bernoulli (1700–1782). Bernoulli’s equation states that for an incompressible, frictionless fluid, the following sum is constant:

P+12ρv2+ρgh\=constant,P+12ρv2+ρgh\=constant,

12.17

where PP is the absolute pressure, ρρ is the fluid density, vv is the velocity of the fluid, hh is the height above some reference point, and gg is the acceleration due to gravity. If we follow a small volume of fluid along its path, various quantities in the sum may change, but the total remains constant. Let the subscripts 1 and 2 refer to any two points along the path that the bit of fluid follows; Bernoulli’s equation becomes

P 1 + 1 2 ρv 1 2 + ρ gh 1 \= P 2 + 1 2 ρv 2 2 + ρ gh 2 . P 1 + 1 2 ρv 1 2 + ρ gh 1 \= P 2 + 1 2 ρv 2 2 + ρ gh 2 .

12.18

Bernoulli’s equation is a form of the conservation of energy principle. Note that the second and third terms are the kinetic and potential energy with mm replaced by ρρ. In fact, each term in the equation has units of energy per unit volume. We can prove this for the second term by substituting ρ\=m/Vρ\=m/V into it and gathering terms:

12ρv2\=12mv2V\=KEV.12ρv2\=12mv2V\=KEV.

12.19

So 12ρv212ρv2 is the kinetic energy per unit volume. Making the same substitution into the third term in the equation, we find

ρgh\=mghV\=PEgV,ρgh\=mghV\=PEgV,

12.20

so ρ ghρ gh is the gravitational potential energy per unit volume. Note that pressure PP has units of energy per unit volume, too. Since _P\=F/AP\=F/A_, its units are N/m2N/m2. If we multiply these by m/m, we obtain N⋅m/m3\=J/m3N⋅m/m3\=J/m3, or energy per unit volume. Bernoulli’s equation is, in fact, just a convenient statement of conservation of energy for an incompressible fluid in the absence of friction.

Conservation of energy applied to fluid flow produces Bernoulli’s equation. The net work done by the fluid’s pressure results in changes in the fluid’s KEKE and PEgPEg per unit volume. If other forms of energy are involved in fluid flow, Bernoulli’s equation can be modified to take these forms into account. Such forms of energy include thermal energy dissipated because of fluid viscosity.

The general form of Bernoulli’s equation has three terms in it, and it is broadly applicable. To understand it better, we will look at a number of specific situations that simplify and illustrate its use and meaning.

### Bernoulli’s Equation for Static Fluids

Let us first consider the very simple situation where the fluid is static—that is, v1\=v2\=0v1\=v2\=0. Bernoulli’s equation in that case is

P1+ρgh1\=P2+ρgh2.P1+ρgh1\=P2+ρgh2.

12.21

We can further simplify the equation by taking h2\=0h2\=0 (we can always choose some height to be zero, just as we often have done for other situations involving the gravitational force, and take all other heights to be relative to this). In that case, we get

P2\=P1+ρgh1.P2\=P1+ρgh1.

12.22

This equation tells us that, in static fluids, pressure increases with depth. As we go from point 1 to point 2 in the fluid, the depth increases by h1h1, and consequently, P2P2 is greater than P1P1 by an amount ρgh1ρgh1. In the very simplest case, P1P1 is zero at the top of the fluid, and we get the familiar relationship P\=ρghP\=ρgh. (Recall that P\=ρghP\=ρgh and ΔPEg\=mgh.ΔPEg\=mgh.) Bernoulli’s equation includes the fact that the pressure due to the weight of a fluid is ρghρgh. Although we introduce Bernoulli’s equation for fluid flow, it includes much of what we studied for static fluids in the preceding chapter.

### Bernoulli’s Principle—Bernoulli’s Equation at Constant Depth

Another important situation is one in which the fluid moves but its depth is constant—that is, h1\=h2h1\=h2. Under that condition, Bernoulli’s equation becomes

P 1 + 1 2 ρv 1 2 \= P 2 + 1 2 ρv 2 2 . P 1 + 1 2 ρv 1 2 \= P 2 + 1 2 ρv 2 2 .

12.23

Situations in which fluid flows at a constant depth are so important that this equation is often called Bernoulli’s principle. It is Bernoulli’s equation for fluids at constant depth. (Note again that this applies to a small volume of fluid as we follow it along its path.) As we have just discussed, pressure drops as speed increases in a moving fluid. We can see this from Bernoulli’s principle. For example, if v2v2 is greater than v1v1 in the equation, then P2P2 must be less than P1P1 for the equality to hold.

#### Calculating Pressure: Pressure Drops as a Fluid Speeds Up

In [Example 12.2](12-1-flow-rate-and-its-relation-to-velocity), we found that the speed of water in a hose increased from 1.96 m/s to 25.5 m/s going from the hose to the nozzle. Calculate the pressure in the hose, given that the absolute pressure in the nozzle is 1.01×105N/m21.01×105N/m2 (atmospheric, as it must be) and assuming level, frictionless flow.

#### Strategy

Level flow means constant depth, so Bernoulli’s principle applies. We use the subscript 1 for values in the hose and 2 for those in the nozzle. We are thus asked to find P1P1.

#### Solution

Solving Bernoulli’s principle for P1P1 yields

P 1 \= P 2 + 1 2 ρv 2 2 − 1 2 ρv 1 2 \= P 2 + 1 2 ρ ( v 2 2 − v 1 2 ) . P 1 \= P 2 + 1 2 ρv 2 2 − 1 2 ρv 1 2 \= P 2 + 1 2 ρ ( v 2 2 − v 1 2 ) .

12.24

Substituting known values,

P1 \= 1.01×105 N/m2 +12(103 kg/m3)(25.5 m/s)2−(1.96 m/s)2 \= 4.24×105 N/m2. P1 \= 1.01×105 N/m2 +12(103 kg/m3)(25.5 m/s)2−(1.96 m/s)2 \= 4.24×105 N/m2.

12.25

#### Discussion

This absolute pressure in the hose is greater than in the nozzle, as expected since v v is greater in the nozzle. The pressure P2P2 in the nozzle must be atmospheric since it emerges into the atmosphere without other changes in conditions.

### Applications of Bernoulli’s Principle

There are a number of devices and situations in which fluid flows at a constant height and, thus, can be analyzed with Bernoulli’s principle.

#### Entrainment

People have long put the Bernoulli principle to work by using reduced pressure in high-velocity fluids to move things about. With a higher pressure on the outside, the high-velocity fluid forces other fluids into the stream. This process is called _entrainment_. Entrainment devices have been in use since ancient times, particularly as pumps to raise water small heights, as in draining swamps, fields, or other low-lying areas. Some other devices that use the concept of entrainment are shown in [Figure 12.5](12-2-bernoullis-equation#fs-id1572246).

![Part a of the figure shows a rectangular section of a cylindrical Bunsen burner as a vertical column. The natural gas is shown to enter the rectangular column from the bottom upward. The air is shown to enter though a nozzle at the left side near the bottom part of the rectangular column and rise upward. Both air and natural gas are shown to rise up together along the length of the column, shown as vertical arrows along the length pointing upward. Part b of the figure shows an atomizer that uses a squeeze bulb in the shape of a small sphere to create a jet of air that entrains drops of perfume contained in a spherical bottomed container. The air is shown to come out of the squeeze bulb and the perfume is shown to rise up from the spherical bottomed container. Part c of the figure shows a common aspirator which contains a cylindrical tube held vertically. The tube is broader on the top and narrow at the bottom. Water is shown to enter the tube from the broader region and flow toward the narrow region. Air is shown to enter the cylindrical tube from the bottom part of the broader side and also flow toward the narrow tube. Part d of the figure shows the chimney of a water heater. Water heater is shown as a rectangular box at the bottom having a cylindrical section in the middle. The cylindrical section is broader at the bottom and narrow toward the top. Hot air is shown to rise up along the vertical section of the cylindrical tube. The chimney is conical at the bottom and rectangular upward and is shown above the rectangular water heater. The hot air enters the chimney at the conical end and rises upward. Cool air is shown to enter the chimney through the area between the rectangular section of heater and chimney from the two sides and rise up along the chimney with the hot air as shown by vertical arrows.](/apps/image-cdn/v1/f=webp/apps/archive/20260105.231123/resources/a06b34a36c183c8cceaa18eb50328db76dd107f2)

Figure 12.5 Examples of entrainment devices that use increased fluid speed to create low pressures, which then entrain one fluid into another. (a) A Bunsen burner uses an adjustable gas nozzle, entraining air for proper combustion. (b) An atomizer uses a squeeze bulb to create a jet of air that entrains drops of perfume. Paint sprayers and carburetors use very similar techniques to move their respective liquids. (c) A common aspirator uses a high-speed stream of water to create a region of lower pressure. Aspirators may be used as suction pumps in dental and surgical situations or for draining a flooded basement or producing a reduced pressure in a vessel. (d) The chimney of a water heater is designed to entrain air into the pipe leading through the ceiling.

#### Wings and Sails

The airplane wing is a beautiful example of Bernoulli’s principle in action. [Figure 12.6](12-2-bernoullis-equation#import-auto-id1889294)(a) shows the characteristic shape of a wing. The wing is tilted upward at a small angle and the upper surface is longer, causing air to flow faster over it. The pressure on top of the wing is therefore reduced, creating a net upward force or lift. (Wings can also gain lift by pushing air downward, utilizing the conservation of momentum principle. The deflected air molecules result in an upward force on the wing — Newton’s third law.) Sails also have the characteristic shape of a wing. (See [Figure 12.6](12-2-bernoullis-equation#import-auto-id1889294)(b).) The pressure on the front side of the sail, PfrontPfront, is lower than the pressure on the back of the sail, PbackPback. This results in a forward force and even allows you to sail into the wind.

For a good illustration of Bernoulli’s principle, make two strips of paper, each about 15 cm long and 4 cm wide. Hold the small end of one strip up to your lips and let it drape over your finger. Blow across the paper. What happens? Now hold two strips of paper up to your lips, separated by your fingers. Blow between the strips. What happens?

#### Velocity measurement

[Figure 12.7](12-2-bernoullis-equation#import-auto-id2598838) shows two devices that measure fluid velocity based on Bernoulli’s principle. The manometer in [Figure 12.7](12-2-bernoullis-equation#import-auto-id2598838)(a) is connected to two tubes that are small enough not to appreciably disturb the flow. The tube facing the oncoming fluid creates a dead spot having zero velocity (v1\=0v1\=0) in front of it, while fluid passing the other tube has velocity v2v2. This means that Bernoulli’s principle as stated in P 1 + 1 2 ρv 1 2 \= P 2 + 1 2 ρv 2 2 P 1 + 1 2 ρv 1 2 \= P 2 + 1 2 ρv 2 2 becomes

P 1 \= P 2 + 1 2 ρv 2 2 . P 1 \= P 2 + 1 2 ρv 2 2 .

12.26

![Part a of the figure shows a picture of a wing. It is in the form of an aerofoil. One side of the wing is broader and the other end tapers. The direction of the air is shown as lines along the length of the wing. The direction of the air below the wing is shown as flowing along the length of the wing. The pressure exerted by the air given by P b is upward. The direction of the air on the top or front part of the wing is shown as flowing along the length of the wing. The pressure exerted by the air is given by P f, and it acts downward. Part b of the figure shows a boat with a sail. The direction of the sail is almost across the boat. The direction of the air in the sail is shown by lines on the front and back sides of the sail. The air currents on the front exert a pressure P front toward the sail, and air currents on the back sides of sail exert a pressure P back again toward the sail.](/apps/image-cdn/v1/f=webp/apps/archive/20260105.231123/resources/624c21623f5ecd2597570cba26cc5431a3ed7e2c)

Figure 12.6 (a) The Bernoulli principle helps explain lift generated by a wing. (b) Sails use the same technique to generate part of their thrust.

Thus pressure P2P2 over the second opening is reduced by 12ρv2212ρv22, and so the fluid in the manometer rises by h h on the side connected to the second opening, where

h∝12ρv22.h∝12ρv22.

12.27

(Recall that the symbol ∝∝ means “proportional to.”) Solving for v2v2, we see that

v2∝h.v2∝h.

12.28

[Figure 12.7](12-2-bernoullis-equation#import-auto-id2598838)(b) shows a version of this device that is in common use for measuring various fluid velocities; such devices are frequently used as air speed indicators in aircraft.

![Part a shows a U-shaped manometer tube connected to ends of two tubes which are placed close together. Tube one is open on the end and shows a velocity v one equals zero at the end. Tube two has an opening on the side and shows a velocity v two across the opening. The level of fluid in the U-shaped tube is more on the right side than on the left. The difference in height is shown by h. Part b of the figure shows a velocity measuring device a pitot tube. Two coaxial tubes, one broader outside and other narrow inside are connected to a U-shaped tube. The U-shaped tube is also narrow at one end and broader at the other. The narrow end of the U-shaped tube is connected to the narrow inner tube and the broader end of the U-shaped tube is connected to the broader outer tube. The tube one has an opening at one of its edges and the velocity of the fluid at the end is v one equals zero. Tube two has an opening on the side and shows a velocity v two across the opening. The level of fluid in the U-shaped tube is more on the right side than on the left. The difference in height is shown by h.](/apps/image-cdn/v1/f=webp/apps/archive/20260105.231123/resources/ab46d617a7d95bcbe75efc40d57326317dd5a2b2)

Figure 12.7 Measurement of fluid speed based on Bernoulli’s principle. (a) A manometer is connected to two tubes that are close together and small enough not to disturb the flow. Tube 1 is open at the end facing the flow. A dead spot having zero speed is created there. Tube 2 has an opening on the side, and so the fluid has a speed v v across the opening; thus, pressure there drops. The difference in pressure at the manometer is 12ρv2212ρv22, and so h h is proportional to 12ρv2212ρv22. (b) This type of velocity measuring device is a Prandtl tube, also known as a pitot tube.