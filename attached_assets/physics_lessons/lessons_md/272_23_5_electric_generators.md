# 23.5 Electric Generators

[Original URL](https://openstax.org/books/college-physics-2e/pages/23-5-electric-generators)

## 23.5 Electric Generators

### Learning Objectives

By the end of this section, you will be able to:

*   Calculate the emf induced in a generator.
*   Calculate the peak emf which can be induced in a particular generator system.

Electric generators induce an emf by rotating a coil in a magnetic field, as briefly discussed in [Induced Emf and Magnetic Flux](23-1-induced-emf-and-magnetic-flux). We will now explore generators in more detail. Consider the following example.

#### Calculating the Emf Induced in a Generator Coil

The generator coil shown in [Figure 23.19](23-5-electric-generators#import-auto-id1169737979702) is rotated through one-fourth of a revolution (from θ \= 0º θ \= 0º to θ \= 90º θ \= 90º ) in 15.0 ms. The 200-turn circular coil has a 5.00 cm radius and is in a uniform 1.25 T magnetic field. What is the average emf induced?

![The figure shows a schematic diagram of an electric generator. It consists of a rotating rectangular coil placed between the two poles of a permanent magnet shown as two rectangular blocks curved on side facing the coil. The magnetic field B is shown pointing from the North to the South Pole. The two ends of this coil are connected to the two small rings. The two conducting carbon brushes are kept pressed separately on both the rings. The coil is attached to an axle with a handle at the other end. Outer ends of the two brushes are connected to the galvanometer. The axle is mechanically rotated from outside by an angle of ninety degree that is a one fourth revolution, to rotate the coil inside the magnetic field. A current is shown to flow in the coil in clockwise direction and the galvanometer shows a deflection to left.](/apps/image-cdn/v1/f=webp/apps/archive/20260105.231123/resources/ec3f7b47c2f41936552057b77b36709d2cfee38a)

Figure 23.19 When this generator coil is rotated through one-fourth of a revolution, the magnetic flux Φ Φ changes from its maximum to zero, inducing an emf.

#### Strategy

We use Faraday’s law of induction to find the average emf induced over a time ΔtΔt:

emf\=−NΔΦΔt.emf\=−NΔΦΔt.

23.11

We know that N\=200N\=200 and Δt\=15.0msΔt\=15.0ms, and so we must determine the change in flux ΔΦΔΦ to find emf.

#### Solution

Since the area of the loop and the magnetic field strength are constant, we see that

ΔΦ\=Δ(BAcosθ)\=ABΔ(cosθ).ΔΦ\=Δ(BAcosθ)\=ABΔ(cosθ).

23.12

Now, Δ(cosθ)\=−1.0Δ(cosθ)\=−1.0, since it was given that θ θ goes from 0º 0º to 90º 90º . Thus ΔΦ\=−ABΔΦ\=−AB, and

emf\=NABΔt.emf\=NABΔt.

23.13

The area of the loop is A\= πr2 \=( 3.14...)(0.0500m )2\=7.85×10−3 m2 A\= πr2 \=( 3.14...)(0.0500m )2\=7.85×10−3 m2 . Entering this value gives

emf\=200(7.85×10−3m2)(1.25 T)15.0×10−3 s\=131V.emf\=200(7.85×10−3m2)(1.25 T)15.0×10−3 s\=131V.

23.14

#### Discussion

This is a practical average value, similar to the 120 V used in household power.

The emf calculated in [Example 23.3](23-5-electric-generators#fs-id1169737058290) is the average over one-fourth of a revolution. What is the emf at any given instant? It varies with the angle between the magnetic field and a perpendicular to the coil. We can get an expression for emf as a function of time by considering the motional emf on a rotating rectangular coil of width ww and height ℓℓ in a uniform magnetic field, as illustrated in [Figure 23.20](23-5-electric-generators#import-auto-id1169738035840).

![The figure shows a schematic diagram of an electric generator with a single rectangular coil. The rotating rectangular coil is placed between the two poles of a permanent magnet shown as two rectangular blocks curved on side facing the coil. The magnetic field B is shown pointing from the North to the South Pole. The North Pole is on the left and the South Pole is to the right and hence the direction of field is from left to right. The angular velocity of the coil is given as omega. The velocity vector v of the coil makes an angle theta with the direction of field.](/apps/image-cdn/v1/f=webp/apps/archive/20260105.231123/resources/29474dfcc661d25da9fd2bd59f4b3c2005fdc038)

Figure 23.20 A generator with a single rectangular coil rotated at constant angular velocity in a uniform magnetic field produces an emf that varies sinusoidally in time. Note the generator is similar to a motor, except the shaft is rotated to produce a current rather than the other way around.

Charges in the wires of the loop experience the magnetic force, because they are moving in a magnetic field. Charges in the vertical wires experience forces parallel to the wire, causing currents. But those in the top and bottom segments feel a force perpendicular to the wire, which does not cause a current. We can thus find the induced emf by considering only the side wires. Motional emf is given to be emf\=Bℓvemf\=Bℓv, where the velocity _v_ is perpendicular to the magnetic field BB. Here the velocity is at an angle θθ with BB, so that its component perpendicular to BB is vsin θvsin θ (see [Figure 23.20](23-5-electric-generators#import-auto-id1169738035840)). Thus in this case the emf induced on each side is emf\=Bℓvsinθemf\=Bℓvsinθ, and they are in the same direction. The total emf around the loop is then

emf\=2Bℓvsinθ.emf\=2Bℓvsinθ.

23.15

This expression is valid, but it does not give emf as a function of time. To find the time dependence of emf, we assume the coil rotates at a constant angular velocity ωω. The angle θθ is related to angular velocity by _θ\=ωtθ\=ωt_, so that

emf\=2Bℓvsinωt.emf\=2Bℓvsinωt.

23.16

Now, linear velocity v v is related to angular velocity ω ω by v\=rωv\=rω. Here r\=w/2r\=w/2, so that _v\=(w/2)ωv\=(w/2)ω_, and

emf\=2Bℓw2ωsinωt\=(ℓw)Bωsinωt.emf\=2Bℓw2ωsinωt\=(ℓw)Bωsinωt.

23.17

Noting that the area of the loop is A\=ℓwA\=ℓw, and allowing for NN loops, we find that

emf \= NAB ω sin ωt emf \= NAB ω sin ωt

23.18

is the emf induced in a generator coil of NN turns and area AA rotating at a constant angular velocity ω ω in a uniform magnetic field BB. This can also be expressed as

emf\=emf0sinωt,emf\=emf0sinωt,

23.19

where

emf 0 \= NAB ω emf 0 \= NAB ω

23.20

is the maximum (peak) emf. Note that the frequency of the oscillation is _f\=ω/2πf\=ω/2π_, and the period is T\=1/f\=2π/ωT\=1/f\=2π/ω_._ [Figure 23.21](23-5-electric-generators#import-auto-id1169737911320) shows a graph of emf as a function of time, and it now seems reasonable that AC voltage is sinusoidal.

![The first part of the figure shows a schematic diagram of a single coil electric generator. It consists of a rotating rectangular loop placed between the two poles of a permanent magnet shown as two rectangular blocks curved on side facing the loop. The magnetic field B is shown pointing from the North to the South Pole. The two ends of this loop are connected to the two small rings. The two conducting carbon brushes are kept pressed separately on both the rings. The loop is rotated in the field with an angular velocity omega. Outer ends of the two brushes are connected to an electric bulb which is shown to glow brightly. The second part of the figure shows the graph for e m f generated E as a function of time t. The e m f is along the Y axis and the time t is along the X axis. The graph is a progressive sine wave with a time period T. The crest maxima are at E zero and trough minima are at negative E zero.](/apps/image-cdn/v1/f=webp/apps/archive/20260105.231123/resources/988d8a6eaeccd6443592b77247761cf1c219205e)

Figure 23.21 The emf of a generator is sent to a light bulb with the system of rings and brushes shown. The graph gives the emf of the generator as a function of time. emf0emf0 is the peak emf. The period is T\=1/f\=2π/ωT\=1/f\=2π/ω, where ff is the frequency. Note that the script E stands for emf.

The fact that the peak emf, emf0\=NABωemf0\=NABω, makes good sense. The greater the number of coils, the larger their area, and the stronger the field, the greater the output voltage. It is interesting that the faster the generator is spun (greater ωω), the greater the emf. This is noticeable on bicycle generators—at least the cheaper varieties. One of the authors as a juvenile found it amusing to ride his bicycle fast enough to burn out his lights, until he had to ride home lightless one dark night.

[Figure 23.22](23-5-electric-generators#import-auto-id1169738092356) shows a scheme by which a generator can be made to produce pulsed DC. More elaborate arrangements of multiple coils and split rings can produce smoother DC, although electronic rather than mechanical means are usually used to make ripple-free DC.

![The first part of the figure shows a schematic diagram of a single coil D C electric generator. It consists of a rotating rectangular loop placed between the two poles of a permanent magnet shown as two rectangular blocks curved on side facing the loop. The magnetic field B is shown pointing from the North to the South Pole. The two ends of this loop are connected to the two sides of a split ring. The two conducting carbon brushes are kept pressed separately on both sides of the split rings. The loop is rotated in the field with an angular velocity w. Outer ends of the two brushes are connected to an electric bulb which is shown to glow brightly. The second part of the figure shows the graph for e m f generated as a function of time. The e m f is along the Y axis and the time t is along the X axis. The graph is a progressive and rectified sine wave with a time period T. The sine wave has only positive pulses. The crest maxima are at E zero.](/apps/image-cdn/v1/f=webp/apps/archive/20260105.231123/resources/91b854bdc16a72244d196d954f51e7d0af60dd29)

Figure 23.22 Split rings, called commutators, produce a pulsed DC emf output in this configuration.

#### Calculating the Maximum Emf of a Generator

Calculate the maximum emf, emf0emf0, of the generator that was the subject of [Example 23.3](23-5-electric-generators#fs-id1169737058290).

#### Strategy

Once ωω, the angular velocity, is determined, emf0\=NABωemf0\=NABω can be used to find emf0emf0. All other quantities are known.

#### Solution

Angular velocity is defined to be the change in angle per unit time:

ω\=ΔθΔt.ω\=ΔθΔt.

23.21

One-fourth of a revolution is π/2π/2 radians, and the time is 0.0150 s; thus,

ω \= π/2 rad0.0150 s \= 104.7 rad/s. ω \= π/2 rad0.0150 s \= 104.7 rad/s.

23.22

104.7 rad/s is exactly 1000 rpm. We substitute this value for ωω and the information from the previous example into emf0\=NABωemf0\=NABω, yielding

emf0 \= NABω \= 200(7.85×10−3m2)(1.25T)(104.7rad/s) \= 206V. emf0 \= NABω \= 200(7.85×10−3m2)(1.25T)(104.7rad/s) \= 206V.

23.23

#### Discussion

The maximum emf is greater than the average emf of 131 V found in the previous example, as it should be.

In real life, electric generators look a lot different than the figures in this section, but the principles are the same. The source of mechanical energy that turns the coil can be falling water (hydropower), steam produced by the burning of fossil fuels, or the kinetic energy of wind. [Figure 23.23](23-5-electric-generators#import-auto-id1169737786586) shows a cutaway view of a steam turbine; steam moves over the blades connected to the shaft, which rotates the coil within the generator.

![Photograph of a steam turbine connected to a generator.](/apps/image-cdn/v1/f=webp/apps/archive/20260105.231123/resources/c2b0f8b00ddd6db12645601600419ab3fe7340a1)

Figure 23.23 Steam turbine/generator. The steam produced by burning coal impacts the turbine blades, turning the shaft which is connected to the generator. (credit: Nabonaco, Wikimedia Commons)

Generators illustrated in this section look very much like the motors illustrated previously. This is not coincidental. In fact, a motor becomes a generator when its shaft rotates. Certain early automobiles used their starter motor as a generator. In [Back Emf](23-6-back-emf), we shall further explore the action of a motor as a generator.