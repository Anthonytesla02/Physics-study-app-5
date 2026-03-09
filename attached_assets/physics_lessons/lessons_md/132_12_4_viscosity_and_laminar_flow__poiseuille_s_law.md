# 12.4 Viscosity and Laminar Flow; Poiseuille’s Law

[Original URL](https://openstax.org/books/college-physics-2e/pages/12-4-viscosity-and-laminar-flow-poiseuilles-law)

## 12.4 Viscosity and Laminar Flow; Poiseuille’s Law

### Learning Objectives

By the end of this section, you will be able to:

*   Define laminar flow and turbulent flow.
*   Explain what viscosity is.
*   Calculate flow and resistance with Poiseuille’s law.
*   Explain how pressure drops due to resistance.

### Laminar Flow and Viscosity

When you pour yourself a glass of juice, the liquid flows freely and quickly. But when you pour syrup on your pancakes, that liquid flows slowly and sticks to the pitcher. The difference is fluid friction, both within the fluid itself and between the fluid and its surroundings. We call this property of fluids _viscosity_. Juice has low viscosity, whereas syrup has high viscosity. In the previous sections we have considered ideal fluids with little or no viscosity. In this section, we will investigate what factors, including viscosity, affect the rate of fluid flow.

The precise definition of viscosity is based on _laminar_, or nonturbulent, flow. Before we can define viscosity, then, we need to define laminar flow and turbulent flow. [Figure 12.10](12-4-viscosity-and-laminar-flow-poiseuilles-law#import-auto-id3356410) shows both types of flow. Laminar flow is characterized by the smooth flow of the fluid in layers that do not mix. Turbulent flow, or turbulence, is characterized by eddies and swirls that mix layers of fluid together.

![Photograph of smoke rising smoothly for a while and then beginning to form swirls and eddies.](/apps/image-cdn/v1/f=webp/apps/archive/20260105.231123/resources/4e3c4c5068f1b88ef78d3f236215488fceebf160)

Figure 12.10 Smoke rises smoothly for a while and then begins to form swirls and eddies. The smooth flow is called laminar flow, whereas the swirls and eddies typify turbulent flow. If you watch the smoke (being careful not to breathe on it), you will notice that it rises more rapidly when flowing smoothly than after it becomes turbulent, implying that turbulence poses more resistance to flow. (credit: Creativity103)

[Figure 12.11](12-4-viscosity-and-laminar-flow-poiseuilles-law#fs-id3007528) shows schematically how laminar and turbulent flow differ. Layers flow without mixing when flow is laminar. When there is turbulence, the layers mix, and there are significant velocities in directions other than the overall direction of flow. The lines that are shown in many illustrations are the paths followed by small volumes of fluids. These are called _streamlines_. Streamlines are smooth and continuous when flow is laminar, but break up and mix when flow is turbulent. Turbulence has two main causes. First, any obstruction or sharp corner, such as in a faucet, creates turbulence by imparting velocities perpendicular to the flow. Second, high speeds cause turbulence. The drag both between adjacent layers of fluid and between the fluid and its surroundings forms swirls and eddies, if the speed is great enough. We shall concentrate on laminar flow for the remainder of this section, leaving certain aspects of turbulence for later sections.

![Part a of the figure shows a laminar flow on a fixed smooth surface. The different layers of the liquid are shown as different colored bands along the horizontal surface. The friction is shown to act all along the line separating two layers. The direction of flow of the fluid is toward right and the velocity is shown as v b for layers at the bottom and v t for layers on top. Part b of the figure shows turbulent flow on a surface with some obstruction. The fluid directions are horizontal on smooth path and irregular near the area of the obstruction. The velocity is v on top as well as at the bottom of the fluid.](/apps/image-cdn/v1/f=webp/apps/archive/20260105.231123/resources/0fd4f4580a2658cb4320ccb3a49e9125ce5137cc)

Figure 12.11 (a) Laminar flow occurs in layers without mixing. Notice that viscosity causes drag between layers as well as with the fixed surface. (b) An obstruction in the vessel produces turbulence. Turbulent flow mixes the fluid. There is more interaction, greater heating, and more resistance than in laminar flow.

Try dropping simultaneously two sticks into a flowing river, one near the edge of the river and one near the middle. Which one travels faster? Why?

[Figure 12.12](12-4-viscosity-and-laminar-flow-poiseuilles-law#import-auto-id1580837) shows how viscosity is measured for a fluid. Two parallel plates have the specific fluid between them. The bottom plate is held fixed, while the top plate is moved to the right, dragging fluid with it. The layer (or lamina) of fluid in contact with either plate does not move relative to the plate, and so the top layer moves at _vv_ while the bottom layer remains at rest. Each successive layer from the top down exerts a force on the one below it, trying to drag it along, producing a continuous variation in speed from _vv_ to 0 as shown. Care is taken to insure that the flow is laminar; that is, the layers do not mix. The motion in [Figure 12.12](12-4-viscosity-and-laminar-flow-poiseuilles-law#import-auto-id1580837) is like a continuous shearing motion. Fluids have zero shear strength, but the _rate_ at which they are sheared is related to the same geometrical factors _AA_ and _LL_ as is shear deformation for solids.

![The figure shows the laminar flow of fluid between two rectangular plates each of area A. The bottom plate is shown as fixed. The distance between the plates is L. The top plate is shown to be pushed to right with a force F. The direction of movement of the layer of fluid in contact with the top plate is also toward right with velocity v. The fluid in contact with the plate in the bottom is shown to be in rest with v equals zero. As we see through the layers above the one on the bottom plate, each show a small displacement toward right in increasing order of value with the topmost layer showing the maximum.](/apps/image-cdn/v1/f=webp/apps/archive/20260105.231123/resources/e423c4cd50459e33724f7c0632d006f99a82af73)

Figure 12.12 The graphic shows laminar flow of fluid between two plates of area AA. The bottom plate is fixed. When the top plate is pushed to the right, it drags the fluid along with it.

A force _FF_ is required to keep the top plate in [Figure 12.12](12-4-viscosity-and-laminar-flow-poiseuilles-law#import-auto-id1580837) moving at a constant velocity _vv_, and experiments have shown that this force depends on four factors. First, _FF_ is directly proportional to _vv_ (until the speed is so high that turbulence occurs—then a much larger force is needed, and it has a more complicated dependence on _vv_). Second, _FF_ is proportional to the area _AA_ of the plate. This relationship seems reasonable, since _AA_ is directly proportional to the amount of fluid being moved. Third, _FF_ is inversely proportional to the distance between the plates _LL_. This relationship is also reasonable; _LL_ is like a lever arm, and the greater the lever arm, the less force that is needed. Fourth, _FF_ is directly proportional to _the coefficient of viscosity_, _ηη_. The greater the viscosity, the greater the force required. These dependencies are combined into the equation

F\=ηvAL,F\=ηvAL,

12.41

which gives us a working definition of fluid viscosity _ηη_. Solving for _ηη_ gives

η\=FLvA,η\=FLvA,

12.42

which defines viscosity in terms of how it is measured. The SI unit of viscosity is N⋅m/\[(m/s)m2\]\=(N/m2)s or Pa⋅sN⋅m/\[(m/s)m2\]\=(N/m2)s or Pa⋅s. [Table 12.1](12-4-viscosity-and-laminar-flow-poiseuilles-law#import-auto-id3073392) lists the coefficients of viscosity for various fluids.

Viscosity varies from one fluid to another by several orders of magnitude. As you might expect, the viscosities of gases are much less than those of liquids, and these viscosities are often temperature dependent. The viscosity of blood can be reduced by aspirin consumption, allowing it to flow more easily around the body. (When used over the long term in low doses, aspirin can help prevent heart attacks, and reduce the risk of blood clotting.)

### Laminar Flow Confined to Tubes—Poiseuille’s Law

What causes flow? The answer, not surprisingly, is pressure difference. In fact, there is a very simple relationship between horizontal flow and pressure. Flow rate _QQ_ is in the direction from high to low pressure. The greater the pressure differential between two points, the greater the flow rate. This relationship can be stated as

Q\=P2−P1R,Q\=P2−P1R,

12.43

where P1P1 and P2P2 are the pressures at two points, such as at either end of a tube, and _RR_ is the resistance to flow. The resistance _RR_ includes everything, except pressure, that affects flow rate. For example, _RR_ is greater for a long tube than for a short one. The greater the viscosity of a fluid, the greater the value of _RR_. Turbulence greatly increases _RR_, whereas increasing the diameter of a tube decreases _RR_.

If viscosity is zero, the fluid is frictionless and the resistance to flow is also zero. Comparing frictionless flow in a tube to viscous flow, as in [Figure 12.13](12-4-viscosity-and-laminar-flow-poiseuilles-law#import-auto-id2578515), we see that for a viscous fluid, speed is greatest at midstream because of drag at the boundaries. We can see the effect of viscosity in a Bunsen burner flame, even though the viscosity of natural gas is small.

The resistance _RR_ to laminar flow of an incompressible fluid having viscosity _ηη_ through a horizontal tube of uniform radius _rr_ and length _ll_, such as the one in [Figure 12.14](12-4-viscosity-and-laminar-flow-poiseuilles-law#import-auto-id1462104), is given by

R \= 8 η l π r 4 . R \= 8 η l π r 4 .

12.44

This equation is called Poiseuille’s law for resistance after the French scientist J. L. Poiseuille (1799–1869), who derived it in an attempt to understand the flow of blood, an often turbulent fluid.

![Part a of the diagram shows a fluid flow across a rectangular non viscous medium. The speed of the fluid is shown to be same across the tube represented as same length of vertical rising arrows. Part b of the diagram shows a fluid flow across a rectangular viscous medium. The speed of the fluid speed at the walls is zero, increasing steadily to its maximum at the center of the tube represented as wave like variation for length of vertical rising arrows. Part c of the figure shows a burning Bunsen burner.](/apps/image-cdn/v1/f=webp/apps/archive/20260105.231123/resources/130e6efb47ea6c0a451d8927485cbab3519fa952)

Figure 12.13 (a) If fluid flow in a tube has negligible resistance, the speed is the same all across the tube. (b) When a viscous fluid flows through a tube, its speed at the walls is zero, increasing steadily to its maximum at the center of the tube. (c) The shape of the Bunsen burner flame is due to the velocity profile across the tube. (credit: Jason Woodhead)

Let us examine Poiseuille’s expression for _RR_ to see if it makes good intuitive sense. We see that resistance is directly proportional to both fluid viscosity _ηη_ and the length _ll_ of a tube. After all, both of these directly affect the amount of friction encountered—the greater either is, the greater the resistance and the smaller the flow. The radius _rr_ of a tube affects the resistance, which again makes sense, because the greater the radius, the greater the flow (all other factors remaining the same). But it is surprising that _rr_ is raised to the _fourth_ power in Poiseuille’s law. This exponent means that any change in the radius of a tube has a very large effect on resistance. For example, doubling the radius of a tube decreases resistance by a factor of 24\=1624\=16.

Taken together, Q\=P2−P1RQ\=P2−P1R and R\=8ηlπr4R\=8ηlπr4 give the following expression for flow rate:

Q\=(P2−P1)πr48ηl.Q\=(P2−P1)πr48ηl.

12.45

This equation describes laminar flow through a tube. It is sometimes called Poiseuille’s law for laminar flow, or simply Poiseuille’s law.

#### Using Flow Rate: Plaque Deposits Reduce Blood Flow

Suppose the flow rate of blood in a coronary artery has been reduced to half its normal value by plaque deposits. By what factor has the radius of the artery been reduced, assuming no turbulence occurs?

#### Strategy

Assuming laminar flow, Poiseuille’s law states that

Q\=(P2−P1)πr48ηl.Q\=(P2−P1)πr48ηl.

12.46

We need to compare the artery radius before and after the flow rate reduction.

#### Solution

With a constant pressure difference assumed and the same length and viscosity, along the artery we have

Q1r14\=Q2r24.Q1r14\=Q2r24.

12.47

So, given that Q2\=0.5Q1Q2\=0.5Q1, we find that r24\=0.5r14r24\=0.5r14.

Therefore, r2\=0.50.25r1\=0.841r1r2\=0.50.25r1\=0.841r1, a decrease in the artery radius of 16%.

#### Discussion

This decrease in radius is surprisingly small for this situation. To restore the blood flow in spite of this buildup would require an increase in the pressure difference P2−P1P2−P1 of a factor of two, with subsequent strain on the heart.

Fluid

Temperature (ºC)

Viscosity η(mPa·s) η(mPa·s)

**_Gases_**

Air

0

0.0171

20

0.0181

40

0.0190

100

0.0218

Ammonia

20

0.00974

Carbon dioxide

20

0.0147

Helium

20

0.0196

Hydrogen

0

0.0090

Mercury

20

0.0450

Oxygen

20

0.0203

Steam

100

0.0130

**_Liquids_**

Water

0

1.792

20

1.002

37

0.6947

40

0.653

100

0.282

Whole blood[1](12-4-viscosity-and-laminar-flow-poiseuilles-law#eip-id1488195)

20

3.015

37

2.084

Blood plasma[2](12-4-viscosity-and-laminar-flow-poiseuilles-law#eip-id1956858)

20

1.810

37

1.257

Ethyl alcohol

20

1.20

Methanol

20

0.584

Oil (heavy machine)

20

660

Oil (motor, SAE 10)

30

200

Oil (olive)

20

138

Glycerin

20

1500

Honey

20

2000–10000

Maple Syrup

20

2000–3000

Milk

20

3.0

Oil (Corn)

20

65

Table 12.1 Coefficients of Viscosity of Various Fluids

The circulatory system provides many examples of Poiseuille’s law in action—with blood flow regulated by changes in vessel size and blood pressure. Blood vessels are not rigid but elastic. Adjustments to blood flow are primarily made by varying the size of the vessels, since the resistance is so sensitive to the radius. During vigorous exercise, blood vessels are selectively dilated to important muscles and organs and blood pressure increases. This creates both greater overall blood flow and increased flow to specific areas. Conversely, decreases in vessel radii, perhaps from plaques in the arteries, can greatly reduce blood flow. If a vessel’s radius is reduced by only 5% (to 0.95 of its original value), the flow rate is reduced to about (0.95)4\=0.81(0.95)4\=0.81 of its original value. A 19% decrease in flow is caused by a 5% decrease in radius. The body may compensate by increasing blood pressure by 19%, but this presents hazards to the heart and any vessel that has weakened walls. Another example comes from automobile engine oil. If you have a car with an oil pressure gauge, you may notice that oil pressure is high when the engine is cold. Motor oil has greater viscosity when cold than when warm, and so pressure must be greater to pump the same amount of cold oil.

![The figure shows a section of a cylindrical tube of length l. The two end cross section are shown to have pressure P two and P one respectively. The radius of the cylindrical tube is given by r. The direction of flow is shown by horizontal arrows toward right end of the tube. The flow rate is marked as Q.](/apps/image-cdn/v1/f=webp/apps/archive/20260105.231123/resources/56b6657300eefc5a1aef00a6aa715828781de050)

Figure 12.14 Poiseuille’s law applies to laminar flow of an incompressible fluid of viscosity ηη through a tube of length ll and radius rr. The direction of flow is from greater to lower pressure. Flow rate QQ is directly proportional to the pressure difference P2−P1P2−P1, and inversely proportional to the length ll of the tube and viscosity ηη of the fluid. Flow rate increases with r4r4, the fourth power of the radius.

#### What Pressure Produces This Flow Rate?

An intravenous (IV) system is supplying saline solution to a patient at the rate of 0.120cm3/s0.120cm3/s through a needle of radius 0.150 mm and length 2.50 cm. What pressure is needed at the entrance of the needle to cause this flow, assuming the viscosity of the saline solution to be the same as that of water? The gauge pressure of the blood in the patient’s vein is 8.00 mm Hg. (Assume that the temperature is 20ºC 20ºC .)

#### Strategy

Assuming laminar flow, Poiseuille’s law applies. This is given by

Q\=(P2−P1)πr48ηl,Q\=(P2−P1)πr48ηl,

12.48

where P2P2 is the pressure at the entrance of the needle and P1P1 is the pressure in the vein. The only unknown is P2P2.

#### Solution

Solving for P2P2 yields

P2\=8ηlπr4Q+P1.P2\=8ηlπr4Q+P1.

12.49

P1P1 is given as 8.00 mm Hg, which converts to 1.066×103N/m21.066×103N/m2. Substituting this and the other known values yields

P2 \= 8(1.00×10−3N⋅s/m2)(2.50×10−2m)π(0.150×10−3m)4(1.20×10−7m3/s)+1.066×103N/m2 \= 1.62×104N/m2. P2 \= 8(1.00×10−3N⋅s/m2)(2.50×10−2m)π(0.150×10−3m)4(1.20×10−7m3/s)+1.066×103N/m2 \= 1.62×104N/m2.

12.50

#### Discussion

This pressure could be supplied by an IV bottle with the surface of the saline solution 1.61 m above the entrance to the needle (this is left for you to solve in this chapter’s Problems and Exercises), assuming that there is negligible pressure drop in the tubing leading to the needle.

### Flow and Resistance as Causes of Pressure Drops

You may have noticed that water pressure in your home might be lower than normal on hot summer days when there is more use. This pressure drop occurs in the water main before it reaches your home. Let us consider flow through the water main as illustrated in [Figure 12.15](12-4-viscosity-and-laminar-flow-poiseuilles-law#import-auto-id3191604). We can understand why the pressure P1P1 to the home drops during times of heavy use by rearranging

Q \= P 2 − P 1 R Q \= P 2 − P 1 R

12.51

to

P2−P1\=RQ,P2−P1\=RQ,

12.52

where, in this case, P2P2 is the pressure at the water works and _RR_ is the resistance of the water main. During times of heavy use, the flow rate _QQ_ is large. This means that P2−P1P2−P1 must also be large. Thus P1P1 must decrease. It is correct to think of flow and resistance as causing the pressure to drop from P2P2 to P1P1. P2−P1\=RQP2−P1\=RQ is valid for both laminar and turbulent flows.

![Figure shows the water distribution system from a water works to homes around that area. The pressure at the pipeline near the water works is shown to have a pressure P two and the pressure at the dividing point were the pipe line splits to corresponding houses the pressure is shown as P one.](/apps/image-cdn/v1/f=webp/apps/archive/20260105.231123/resources/ee1f7c1ad86670663b0a03f7cecfbf86a0968903)

Figure 12.15 During times of heavy use, there is a significant pressure drop in a water main, and P 1 P 1 supplied to users is significantly less than P 2 P 2 created at the water works. If the flow is very small, then the pressure drop is negligible, and P2≈P1P2≈P1.

We can use P2−P1\=RQP2−P1\=RQ to analyze pressure drops occurring in more complex systems in which the tube radius is not the same everywhere. Resistance will be much greater in narrow places, such as an obstructed coronary artery. For a given flow rate _QQ_, the pressure drop will be greatest where the tube is most narrow. This is how water faucets control flow. Additionally, _RR_ is greatly increased by turbulence, and a constriction that creates turbulence greatly reduces the pressure downstream. Plaque in an artery reduces pressure and hence flow, both by its resistance and by the turbulence it creates.

[Figure 12.16](12-4-viscosity-and-laminar-flow-poiseuilles-law#fs-id2660781) is a schematic of the human circulatory system, showing average blood pressures in its major parts for an adult at rest. Pressure created by the heart’s two pumps, the right and left ventricles, is reduced by the resistance of the blood vessels as the blood flows through them. The left ventricle increases arterial blood pressure that drives the flow of blood through all parts of the body except the lungs. The right ventricle receives the lower pressure blood from two major veins and pumps it through the lungs for gas exchange with atmospheric gases – the disposal of carbon dioxide from the blood and the replenishment of oxygen. Only one major organ is shown schematically, with typical branching of arteries to ever smaller vessels, the smallest of which are the capillaries, and rejoining of small veins into larger ones. Similar branching takes place in a variety of organs in the body, and the circulatory system has considerable flexibility in flow regulation to these organs by the dilation and constriction of the arteries leading to them and the capillaries within them. The sensitivity of flow to tube radius makes this flexibility possible over a large range of flow rates.

![Figure is a schematic diagram of the circulatory system. The lungs, heart, arteries and vein systems are shown. The blood is shown to flow from the left atrium through the arteries, then through the veins and back to the right atrium. The flow is also shown from right atrium to the lungs and from lungs back to left atrium. All parts of the system are labeled. Pressure various points of the system all along the movement of blood across various parts are also marked.](/apps/image-cdn/v1/f=webp/apps/archive/20260105.231123/resources/8011aa72817896fbd54a3e2ea436a1d7cf74984a)

Figure 12.16 Schematic of the circulatory system. Pressure difference is created by the two pumps in the heart and is reduced by resistance in the vessels. Branching of vessels into capillaries allows blood to reach individual cells and exchange substances, such as oxygen and waste products, with them. The system has an impressive ability to regulate flow to individual organs, accomplished largely by varying vessel diameters.

Each branching of larger vessels into smaller vessels increases the total cross-sectional area of the tubes through which the blood flows. For example, an artery with a cross section of 1cm21cm2 may branch into 20 smaller arteries, each with cross sections of 0.5cm20.5cm2, with a total of 10cm210cm2. In that manner, the resistance of the branchings is reduced so that pressure is not entirely lost. Moreover, because Q\=A v ¯ Q\=A v ¯ and A A increases through branching, the average velocity of the blood in the smaller vessels is reduced. The blood velocity in the aorta (diameter\=1cmdiameter\=1cm) is about 25 cm/s, while in the capillaries ( 20 μm 20 μm in diameter) the velocity is about 1 mm/s. This reduced velocity allows the blood to exchange substances with the cells in the capillaries and alveoli in particular.