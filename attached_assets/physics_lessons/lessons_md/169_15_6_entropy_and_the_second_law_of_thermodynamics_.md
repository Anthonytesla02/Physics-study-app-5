# 15.6 Entropy and the Second Law of Thermodynamics: Disorder and the Unavailability of Energy

[Original URL](https://openstax.org/books/college-physics-2e/pages/15-6-entropy-and-the-second-law-of-thermodynamics-disorder-and-the-unavailability-of-energy)

## 15.6 Entropy and the Second Law of Thermodynamics: Disorder and the Unavailability of Energy

### Learning Objectives

By the end of this section, you will be able to:

*   Define entropy and calculate the increase of entropy in a system with reversible and irreversible processes.
*   Explain the expected fate of the universe in entropic terms.
*   Calculate the increasing disorder of a system.

![Photograph shows a glass of a beverage with ice cubes and a straw, placed on a paper napkin on the table. There is a piece of sliced lemon at the edge of the glass. There is condensate around the outside surface of the glass, giving the appearance that the ice is melting.](/apps/image-cdn/v1/f=webp/apps/archive/20260105.231123/resources/85329f6f562ff70cebcafb223e25bf3f6dca5981)

Figure 15.31 The ice in this drink is slowly melting. Eventually the liquid will reach thermal equilibrium, as predicted by the second law of thermodynamics. (credit: Jon Sullivan, PDPhoto.org)

There is yet another way of expressing the second law of thermodynamics. This version relates to a concept called entropy. By examining it, we shall see that the directions associated with the second law—heat transfer from hot to cold, for example—are related to the tendency in nature for systems to become disordered and for less energy to be available for use as work. The entropy of a system can in fact be shown to be a measure of its disorder and of the unavailability of energy to do work.

Recall that the simple definition of energy is the ability to do work. Entropy is a measure of how much energy is not available to do work. Although all forms of energy are interconvertible, and all can be used to do work, it is not always possible, even in principle, to convert the entire available energy into work. That unavailable energy is of interest in thermodynamics, because the field of thermodynamics arose from efforts to convert heat to work.

We can see how entropy is defined by recalling our discussion of the Carnot engine. We noted that for a Carnot cycle, and hence for any reversible processes, Qc/Qh\=Tc/ThQc/Qh\=Tc/Th. Rearranging terms yields

Q c T c \= Q h T h Q c T c \= Q h T h

15.46

for any reversible process. QcQc and QhQh are absolute values of the heat transfer at temperatures TcTc and ThTh, respectively. This ratio of Q/TQ/T is defined to be the change in entropy ΔSΔS for a reversible process,

ΔS\=QTrev,ΔS\=QTrev,

15.47

where QQ is the heat transfer, which is positive for heat transfer into and negative for heat transfer out of, and TT is the absolute temperature at which the reversible process takes place. The SI unit for entropy is joules per kelvin (J/K). If temperature changes during the process, then it is usually a good approximation (for small changes in temperature) to take TT to be the average temperature, avoiding the need to use integral calculus to find ΔSΔS.

The definition of ΔSΔS is strictly valid only for reversible processes, such as used in a Carnot engine. However, we can find ΔSΔS precisely even for real, irreversible processes. The reason is that the entropy ss of a system, like internal energy EintEint, depends only on the state of the system and not how it reached that condition. Entropy is a property of state. Thus the change in entropy ΔSΔS of a system between state 1 and state 2 is the same no matter how the change occurs. We just need to find or imagine a reversible process that takes us from state 1 to state 2 and calculate ΔSΔS for that process. That will be the change in entropy for any process going from state 1 to state 2. (See [Figure 15.32](15-6-entropy-and-the-second-law-of-thermodynamics-disorder-and-the-unavailability-of-energy#import-auto-id1169738050955).)

![The diagram shows a schematic representation of a system that goes from state one with entropy S sub one to state two with entropy S sub two. The two states are shown as two circles drawn a distance apart. Two arrows represent two different processes to take the system from state one to state two. A straight arrow pointing from state one to state two shows a reversible process. The change in entropy for this process is given by delta S equals Q divided by T. The second process is marked as a curving arrow from state one to state two, showing an irreversible process. The change in entropy for this process is given by delta S sub irreversible equals delta S sub reversible equals S sub two minus S sub one.](/apps/image-cdn/v1/f=webp/apps/archive/20260105.231123/resources/38ecd9089dcd844a0697085ad700fe81c4eb0d07)

Figure 15.32 When a system goes from state 1 to state 2, its entropy changes by the same amount ΔSΔS, whether a hypothetical reversible path is followed or a real irreversible path is taken.

Now let us take a look at the change in entropy of a Carnot engine and its heat reservoirs for one full cycle. The hot reservoir has a loss of entropy ΔSh\=−Qh/ThΔSh\=−Qh/Th, because heat transfer occurs out of it (remember that when heat transfers out, then QQ has a negative sign). The cold reservoir has a gain of entropy ΔSc\=Qc/TcΔSc\=Qc/Tc, because heat transfer occurs into it. (We assume the reservoirs are sufficiently large that their temperatures are constant.) So the total change in entropy is

ΔS tot \= ΔS h + ΔS c . ΔS tot \= ΔS h + ΔS c .

15.48

Thus, since we know that Qh/Th\=Qc/TcQh/Th\=Qc/Tc for a Carnot engine,

ΔS tot \=– Q h T h + Q c T c \= 0 . ΔS tot \=– Q h T h + Q c T c \= 0 .

15.49

This result, which has general validity, means that _the total change in entropy for a system in any reversible process is zero._

The entropy of various parts of the system may change, but the total change is zero. Furthermore, the system does not affect the entropy of its surroundings, since heat transfer between them does not occur. Thus the reversible process changes neither the total entropy of the system nor the entropy of its surroundings. Sometimes this is stated as follows: _Reversible processes do not affect the total entropy of the universe._ Real processes are not reversible, though, and they do change total entropy. We can, however, use hypothetical reversible processes to determine the value of entropy in real, irreversible processes. The following example illustrates this point.

#### Entropy Increases in an Irreversible (Real) Process

Spontaneous heat transfer from hot to cold is an irreversible process. Calculate the total change in entropy if 4000 J of heat transfer occurs from a hot reservoir at Th\=600 K327º CTh\=600 K327º C to a cold reservoir at Tc\=250 K−23º CTc\=250 K−23º C, assuming there is no temperature change in either reservoir. (See [Figure 15.33](15-6-entropy-and-the-second-law-of-thermodynamics-disorder-and-the-unavailability-of-energy#import-auto-id1169738087634).)

#### Strategy

How can we calculate the change in entropy for an irreversible process when ΔStot\=ΔSh+ΔScΔStot\=ΔSh+ΔSc is valid only for reversible processes? Remember that the total change in entropy of the hot and cold reservoirs will be the same whether a reversible or irreversible process is involved in heat transfer from hot to cold. So we can calculate the change in entropy of the hot reservoir for a hypothetical reversible process in which 4000 J of heat transfer occurs from it; then we do the same for a hypothetical reversible process in which 4000 J of heat transfer occurs to the cold reservoir. This produces the same changes in the hot and cold reservoirs that would occur if the heat transfer were allowed to occur irreversibly between them, and so it also produces the same changes in entropy.

#### Solution

We now calculate the two changes in entropy using ΔStot\=ΔSh+ΔScΔStot\=ΔSh+ΔSc. First, for the heat transfer from the hot reservoir,

ΔSh\=−QhTh\=−4000 J600 K\=–6.67 J/K.ΔSh\=−QhTh\=−4000 J600 K\=–6.67 J/K.

15.50

And for the cold reservoir,

ΔSc\=QcTc\=4000 J250 K\=16.0 J/K.ΔSc\=QcTc\=4000 J250 K\=16.0 J/K.

15.51

Thus the total is

ΔS tot \= ΔS h + ΔS c \= ( – 6 . 67 +16 . 0 ) J/K \= 9.33 J/K. ΔS tot \= ΔS h + ΔS c \= ( – 6 . 67 +16 . 0 ) J/K \= 9.33 J/K.

15.52

#### Discussion

There is an _increase_ in entropy for the system of two heat reservoirs undergoing this irreversible heat transfer. We will see that this means there is a loss of ability to do work with this transferred energy. Entropy has increased, and energy has become unavailable to do work.

![Part a of the figure shows the irreversible heat transfer from the hot system to the cold system. The hot reservoir at temperature T sub h is represented by a rectangular section in the top and the cold reservoir at temperature T sub c is shown as a rectangular section at the bottom. Heat Q is shown to flow from hot reservoir to cold reservoir as shown by a continuous bold arrow pointing downward. The heat is a direct transfer from T sub h to T sub c. The entropy change delta S for an irreversible process is shown equal to entropy change delta S for a reversible process. Part b of the figure shows two reversible heat transfers from the hot system to the cold system. The hot reservoir at temperature T sub h is represented by a rectangular section in the top and the cold reservoir at temperature T sub c is shown as a rectangular section at the bottom. Heat Q is shown to flow out of the hot reservoir, and an equal amount of heat Q is shown to flow into the cold reservoir as shown by two arrows representing two reversible processes and not a direct transfer from T sub h to T sub c. The entropy change delta S for an irreversible process is shown equal to entropy change delta S for a reversible process. ](/apps/image-cdn/v1/f=webp/apps/archive/20260105.231123/resources/20d9af9859635ea2b64bb07683851d6a3f2f7cf8)

Figure 15.33 (a) Heat transfer from a hot object to a cold one is an irreversible process that produces an overall increase in entropy. (b) The same final state and, thus, the same change in entropy is achieved for the objects if reversible heat transfer processes occur between the two objects whose temperatures are the same as the temperatures of the corresponding objects in the irreversible process.

It is reasonable that entropy increases for heat transfer from hot to cold. Since the change in entropy is Q/TQ/T, there is a larger change at lower temperatures. The decrease in entropy of the hot object is therefore less than the increase in entropy of the cold object, producing an overall increase, just as in the previous example. This result is very general:

_There is an increase in entropy for any system undergoing an irreversible process._

With respect to entropy, there are only two possibilities: entropy is constant for a reversible process, and it increases for an irreversible process. There is a fourth version of the second law of thermodynamics stated in terms of entropy:

_The total entropy of a system either increases or remains constant in any process; it never decreases._

For example, heat transfer cannot occur spontaneously from cold to hot, because entropy would decrease.

Entropy is very different from energy. Entropy is _not_ conserved but increases in all real processes. Reversible processes (such as in Carnot engines) are the processes in which the most heat transfer to work takes place and are also the ones that keep entropy constant. Thus we are led to make a connection between entropy and the availability of energy to do work.

### Entropy and the Unavailability of Energy to Do Work

What does a change in entropy mean, and why should we be interested in it? One reason is that entropy is directly related to the fact that not all heat transfer can be converted into work. The next example gives some indication of how an increase in entropy results in less heat transfer into work.

#### Less Work is Produced by a Given Heat Transfer When Entropy Change is Greater

(a) Calculate the work output of a Carnot engine operating between temperatures of 600 K and 100 K for 4000 J of heat transfer to the engine. (b) Now suppose that the 4000 J of heat transfer occurs first from the 600 K reservoir to a 250 K reservoir (without doing any work, and this produces the increase in entropy calculated above) before transferring into a Carnot engine operating between 250 K and 100 K. What work output is produced? (See [Figure 15.34](15-6-entropy-and-the-second-law-of-thermodynamics-disorder-and-the-unavailability-of-energy#import-auto-id1169737787906).)

#### Strategy

In both parts, we must first calculate the Carnot efficiency and then the work output.

#### Solution (a)

The Carnot efficiency is given by

EffC\=1−TcTh. EffC\=1−TcTh.

15.53

Substituting the given temperatures yields

EffC\=1−100 K600 K\=0.833.EffC\=1−100 K600 K\=0.833.

15.54

Now the work output can be calculated using the definition of efficiency for any heat engine as given by

Eff\=WQh.Eff\=WQh.

15.55

Solving for WW and substituting known terms gives

W \= Eff C Q h \= ( 0.833 ) ( 4000 J ) \= 3333 J. W \= Eff C Q h \= ( 0.833 ) ( 4000 J ) \= 3333 J.

15.56

#### Solution (b)

Similarly,

Eff ′ C \= 1 − T c T′ c \= 1 − 100 K 250 K \= 0.600, Eff ′ C \= 1 − T c T′ c \= 1 − 100 K 250 K \= 0.600,

15.57

so that

W \= Eff ′ C Q h \= ( 0.600 ) ( 4000 J ) \= 2400 J. W \= Eff ′ C Q h \= ( 0.600 ) ( 4000 J ) \= 2400 J.

15.58

#### Discussion

There is 933 J less work from the same heat transfer in the second process. This result is important. The same heat transfer into two perfect engines produces different work outputs, because the entropy change differs in the two cases. In the second case, entropy is greater and less work is produced. Entropy is associated with the _un_availability of energy to do work.

![Part a of the diagram shows a schematic diagram of a Carnot engine shown as a circle. The hot reservoir is shown as a rectangular section above the circle at temperature T sub h equals six hundred Kelvin. The cold reservoir is shown as a rectangular section below the circle at temperature T sub c equals one hundred Kelvin. A heat Q sub h from the hot reservoir equals four thousand joules is shown to enter the engine as shown as a bold arrow toward the circle from the hot reservoir. A part of it leaves as work W equals three thousand three hundred thirty three joules from the engine. The remaining heat Q sub c equals six hundred sixty seven joules is returned back to the cold reservoir as shown by a bold arrow toward it. Part b of the diagram shows a schematic diagram of a Carnot engine shown as a circle. This engine is shown to have a greater entropy level. An initial heat transfer of four thousand joules occurs from a hot reservoir shown as a rectangular section above the circle toward left at temperature T sub h equals six hundred Kelvin to another rectangular section above the circle at temperature T sub h prime equals two fifty Kelvin. The cold reservoir is shown as a rectangular section below the circle at temperature T sub c prime equals one hundred Kelvin. A heat Q sub h prime from the hot reservoir equals four thousand joules is shown to enter the engine as shown as a bold arrow toward the circle from this hot reservoir. A part of it leaves as work W equals two thousand four hundred joules from the engine. The remaining heat Q sub c equals one thousand six hundred joules is returned back to the cold reservoir as shown by a bold arrow toward it.](/apps/image-cdn/v1/f=webp/apps/archive/20260105.231123/resources/ec206d452621bf4a5dcf52a31d3594e2f9dda5d0)

Figure 15.34 (a) A Carnot engine working at between 600 K and 100 K has 4000 J of heat transfer and performs 3333 J of work. (b) The 4000 J of heat transfer occurs first irreversibly to a 250 K reservoir and then goes into a Carnot engine. The increase in entropy caused by the heat transfer to a colder reservoir results in a smaller work output of 2400 J. There is a permanent loss of 933 J of energy for the purpose of doing work.

When entropy increases, a certain amount of energy becomes _permanently_ unavailable to do work. The energy is not lost, but its character is changed, so that some of it can never be converted to doing work—that is, to an organized force acting through a distance. For instance, in the previous example, 933 J less work was done after an increase in entropy of 9.33 J/K occurred in the 4000 J heat transfer from the 600 K reservoir to the 250 K reservoir. It can be shown that the amount of energy that becomes unavailable for work is

Wunavail\=ΔS⋅T0,Wunavail\=ΔS⋅T0,

15.59

where T0T0 is the lowest temperature utilized. In the previous example,

Wunavail\=9.33 J/K100 K\=933 JWunavail\=9.33 J/K100 K\=933 J

15.60

as found.

### Heat Death of the Universe: An Overdose of Entropy

In the early, energetic universe, all matter and energy were easily interchangeable and identical in nature. Gravity played a vital role in the young universe. Although it may have _seemed_ disorderly, and therefore, superficially entropic, in fact, there was enormous potential energy available to do work—all the future energy in the universe.

As the universe matured, temperature differences arose, which created more opportunity for work. Stars are hotter than planets, for example, which are warmer than icy asteroids, which are warmer still than the vacuum of the space between them.

Most of these are cooling down from their usually violent births, at which time they were provided with energy of their own—nuclear energy in the case of stars, volcanic energy on Earth and other planets, and so on. Without additional energy input, however, their days are numbered.

As entropy increases, less and less energy in the universe is available to do work. On Earth, we still have great stores of energy such as fossil and nuclear fuels; large-scale temperature differences, which can provide wind energy; geothermal energies due to differences in temperature in Earth’s layers; and tidal energies owing to our abundance of liquid water. As these are used, a certain fraction of the energy they contain can never be converted into doing work. Eventually, all fuels will be exhausted, all temperatures will equalize, and it will be impossible for heat engines to function, or for work to be done.

Entropy increases in a closed system, such as the universe. But in parts of the universe, for instance, in the Solar system, it is not a locally closed system. Energy flows from the Sun to the planets, replenishing Earth’s stores of energy. The Sun will continue to supply us with energy for about another five billion years. We will enjoy direct solar energy, as well as side effects of solar energy, such as wind power and biomass energy from photosynthetic plants. The energy from the Sun will keep our water at the liquid state, and the Moon’s gravitational pull will continue to provide tidal energy. But Earth’s geothermal energy will slowly run down and won’t be replenished.

But in terms of the universe, and the very long-term, very large-scale picture, the entropy of the universe is increasing, and so the availability of energy to do work is constantly decreasing. Eventually, when all stars have died, all forms of potential energy have been utilized, and all temperatures have equalized (depending on the mass of the universe, either at a very high temperature following a universal contraction, or a very low one, just before all activity ceases) there will be no possibility of doing work.

Either way, the universe is destined for thermodynamic equilibrium—maximum entropy. This is often called the _heat death of the universe_, and will mean the end of all activity. However, whether the universe contracts and heats up, or continues to expand and cools down, the end is not near. Calculations of black holes suggest that entropy can easily continue for at least 1010010100 years.

### Order to Disorder

Entropy is related not only to the unavailability of energy to do work—it is also a measure of disorder. This notion was initially postulated by Ludwig Boltzmann in the 1800s. For example, melting a block of ice means taking a highly structured and orderly system of water molecules and converting it into a disorderly liquid in which molecules have no fixed positions. (See [Figure 15.35](15-6-entropy-and-the-second-law-of-thermodynamics-disorder-and-the-unavailability-of-energy#import-auto-id1169737811865).) There is a large increase in entropy in the process, as seen in the following example.

#### Entropy Associated with Disorder

Find the increase in entropy of 1.00 kg of ice originally at 0º C0º C that is melted to form water at 0º C0º C.

#### Strategy

As before, the change in entropy can be calculated from the definition of ΔSΔS once we find the energy QQ needed to melt the ice.

#### Solution

The change in entropy is defined as:

ΔS\=QT.ΔS\=QT.

15.61

Here QQ is the heat transfer necessary to melt 1.00 kg of ice and is given by

Q\=mLf,Q\=mLf,

15.62

where mm is the mass and LfLf is the latent heat of fusion. Lf\=334 kJ/kgLf\=334 kJ/kg for water, so that

Q\=(1.00 kg)(334 kJ/kg)\=3.34×105 J.Q\=(1.00 kg)(334 kJ/kg)\=3.34×105 J.

15.63

Now the change in entropy is positive, since heat transfer occurs into the ice to cause the phase change; thus,

ΔS\=QT\=3.34×105 JT.ΔS\=QT\=3.34×105 JT.

15.64

TT is the melting temperature of ice. That is, T\=0ºC=273 KT\=0ºC=273 K. So the change in entropy is

ΔS \= 3 . 34 × 10 5 J 273 K \= 1.22 × 10 3 J/K. ΔS \= 3 . 34 × 10 5 J 273 K \= 1.22 × 10 3 J/K.

15.65

#### Discussion

This is a significant increase in entropy accompanying an increase in disorder.

![The diagram has two images. The first image shows molecules of ice. They are represented as tiny spheres joined to form a floral pattern. The system is shown as ordered. The second image shows what happens when ice melts. The change in entropy delta S is marked between the two images shown by an arrow pointing from first image toward the second image with change in entropy delta S shown greater than zero. The second image represents water shown as tiny spheres moving in a random state. The system is marked as disordered.](/apps/image-cdn/v1/f=webp/apps/archive/20260105.231123/resources/3b96684c9adf653a5c01cbe157552307df51ccf0)

Figure 15.35 When ice melts, it becomes more disordered and less structured. The systematic arrangement of molecules in a crystal structure is replaced by a more random and less orderly movement of molecules without fixed locations or orientations. Its entropy increases because heat transfer occurs into it. Entropy is a measure of disorder.

In another easily imagined example, suppose we mix equal masses of water originally at two different temperatures, say 20.0º C20.0º C and 40.0º C40.0º C. The result is water at an intermediate temperature of 30.0º C30.0º C. Three outcomes have resulted: entropy has increased, some energy has become unavailable to do work, and the system has become less orderly. Let us think about each of these results.

First, entropy has increased for the same reason that it did in the example above. Mixing the two bodies of water has the same effect as heat transfer from the hot one and the same heat transfer into the cold one. The mixing decreases the entropy of the hot water but increases the entropy of the cold water by a greater amount, producing an overall increase in entropy.

Second, once the two masses of water are mixed, there is only one temperature—you cannot run a heat engine with them. The energy that could have been used to run a heat engine is now unavailable to do work.

Third, the mixture is less orderly, or to use another term, less structured. Rather than having two masses at different temperatures and with different distributions of molecular speeds, we now have a single mass with a uniform temperature.

These three results—entropy, unavailability of energy, and disorder—are not only related but are in fact essentially equivalent.

### Life, Evolution, and the Second Law of Thermodynamics

Some people misunderstand the second law of thermodynamics, stated in terms of entropy, to say that the process of the evolution of life violates this law. Over time, complex organisms evolved from much simpler ancestors, representing a large decrease in entropy of the Earth’s biosphere. It is a fact that living organisms have evolved to be highly structured, and much lower in entropy than the substances from which they grow. But it is _always_ possible for the entropy of one part of the universe to decrease, provided the total change in entropy of the universe increases. In equation form, we can write this as

ΔStot\=ΔSsyst+ΔSenvir\>0.ΔStot\=ΔSsyst+ΔSenvir\>0.

15.66

Thus ΔSsystΔSsyst can be negative as long as ΔSenvirΔSenvir is positive and greater in magnitude.

How is it possible for a system to decrease its entropy? Energy transfer is necessary. If I pick up marbles that are scattered about the room and put them into a cup, my work has decreased the entropy of that system. If I gather iron ore from the ground and convert it into steel and build a bridge, my work has decreased the entropy of that system. Energy coming from the Sun can decrease the entropy of local systems on Earth—that is, ΔSsystΔSsyst is negative. But the overall entropy of the rest of the universe increases by a greater amount—that is, ΔSenvirΔSenvir is positive and greater in magnitude. Thus, ΔStot\=ΔSsyst+ΔSenvir\>0ΔStot\=ΔSsyst+ΔSenvir\>0, and the second law of thermodynamics is _not_ violated.

Every time a plant stores some solar energy in the form of chemical potential energy, or an updraft of warm air lifts a soaring bird, the Earth can be viewed as a heat engine operating between a hot reservoir supplied by the Sun and a cold reservoir supplied by dark outer space—a heat engine of high complexity, causing local decreases in entropy as it uses part of the heat transfer from the Sun into deep space. There is a large total increase in entropy resulting from this massive heat transfer. A small part of this heat transfer is stored in structured systems on Earth, producing much smaller local decreases in entropy. (See [Figure 15.36](15-6-entropy-and-the-second-law-of-thermodynamics-disorder-and-the-unavailability-of-energy#import-auto-id1169738014330).)

![The figure shows the schematic diagram for heat transfer from the Sun into deep space. The picture of the Sun is shown at the left most end of the diagram. The temperature of the Sun is marked as T sub h. The heat Q is shown to flow as a bold arrow pointing till the right end of the diagram which is labeled as deep space. The temperature here is shown as T sub c equals three Kelvin. The Earth is shown as a sphere at the middle of this bold arrow stream between Sun and deep space. The Earth is shown to receive an internal energy delta E sub int. The change in entropy of Earth delta S is shown to be less than zero with a question mark.](/apps/image-cdn/v1/f=webp/apps/archive/20260105.231123/resources/1440293075ee90446c129661bfe9b5528ccf8dfe)

Figure 15.36 Earth’s entropy may decrease in the process of intercepting a small part of the heat transfer from the Sun into deep space. Entropy for the entire process increases greatly while Earth becomes more structured with living systems and stored energy in various forms.

#### Reversible Reactions

Watch a reaction proceed over time. How does total energy affect a reaction rate? Vary temperature, barrier height, and potential energies. Record concentrations and time in order to extract rate coefficients. Do temperature dependent studies to extract Arrhenius parameters. This simulation is best used with teacher guidance because it presents an analogy of chemical reactions.

[Click to view content](https://openstax.org/l/21reversereact).