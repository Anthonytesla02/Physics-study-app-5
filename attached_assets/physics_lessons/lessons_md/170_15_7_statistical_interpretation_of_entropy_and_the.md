# 15.7 Statistical Interpretation of Entropy and the Second Law of Thermodynamics: The Underlying Explanation

[Original URL](https://openstax.org/books/college-physics-2e/pages/15-7-statistical-interpretation-of-entropy-and-the-second-law-of-thermodynamics-the-underlying-explanation)

## 15.7 Statistical Interpretation of Entropy and the Second Law of Thermodynamics: The Underlying Explanation

### Learning Objectives

By the end of this section, you will be able to:

*   Identify probabilities in entropy.
*   Analyze statistical probabilities in entropic systems.

![Photograph of many coins laid down on a surface, some with heads shown up and some with tails shown up.](/apps/image-cdn/v1/f=webp/apps/archive/20260105.231123/resources/d824681a64d6230b3ab04247187015557e7abc17)

Figure 15.37 When you toss a coin a large number of times, heads and tails tend to come up in roughly equal numbers. Why doesn’t heads come up 100, 90, or even 80% of the time? (credit: Jon Sullivan, PDPhoto.org)

The various ways of formulating the second law of thermodynamics tell what happens rather than why it happens. Why should heat transfer occur only from hot to cold? Why should energy become ever less available to do work? Why should the universe become increasingly disorderly? The answer is that it is a matter of overwhelming probability. Disorder is simply vastly more likely than order.

When you watch an emerging rain storm begin to wet the ground, you will notice that the drops fall in a disorganized manner both in time and in space. Some fall close together, some far apart, but they never fall in straight, orderly rows. It is not impossible for rain to fall in an orderly pattern, just highly unlikely, because there are many more disorderly ways than orderly ones. To illustrate this fact, we will examine some random processes, starting with coin tosses.

### Coin Tosses

What are the possible outcomes of tossing 5 coins? Each coin can land either heads or tails. On the large scale, we are concerned only with the total heads and tails and not with the order in which heads and tails appear. The following possibilities exist:

5 heads, 0 tails 4 heads, 1 tail 3 heads, 2 tails 2 heads, 3 tails 1 head, 4 tails 0 head, 5 tails 5 heads, 0 tails 4 heads, 1 tail 3 heads, 2 tails 2 heads, 3 tails 1 head, 4 tails 0 head, 5 tails

15.67

These are what we call macrostates. A macrostate is an overall property of a system. It does not specify the details of the system, such as the order in which heads and tails occur or which coins are heads or tails.

Using this nomenclature, a system of 5 coins has the 6 possible macrostates just listed. Some macrostates are more likely to occur than others. For instance, there is only one way to get 5 heads, but there are several ways to get 3 heads and 2 tails, making the latter macrostate more probable. [Table 15.3](15-7-statistical-interpretation-of-entropy-and-the-second-law-of-thermodynamics-the-underlying-explanation#import-auto-id1169738164494) lists of all the ways in which 5 coins can be tossed, taking into account the order in which heads and tails occur. Each sequence is called a microstate—a detailed description of every element of a system.

Individual microstates

Number of microstates

5 heads, 0 tails

HHHHH

1

4 heads, 1 tail

HHHHT, HHHTH, HHTHH, HTHHH, THHHH

5

3 heads, 2 tails

HTHTH, THTHH, HTHHT, THHTH, THHHT HTHTH, THTHH, HTHHT, THHTH, THHHT

10

2 heads, 3 tails

TTTHH, TTHHT, THHTT, HHTTT, TTHTH, THTHT, HTHTT, THTTH, HTTHT, HTTTH

10

1 head, 4 tails

TTTTH, TTTHT, TTHTT, THTTT, HTTTT

5

0 heads, 5 tails

TTTTT

1

Total: 32

Table 15.3 5-Coin Toss

The macrostate of 3 heads and 2 tails can be achieved in 10 ways and is thus 10 times more probable than the one having 5 heads. Not surprisingly, it is equally probable to have the reverse, 2 heads and 3 tails. Similarly, it is equally probable to get 5 tails as it is to get 5 heads. Note that all of these conclusions are based on the crucial assumption that each microstate is equally probable. With coin tosses, this requires that the coins not be asymmetric in a way that favors one side over the other, as with loaded dice. With any system, the assumption that all microstates are equally probable must be valid, or the analysis will be erroneous.

The two most orderly possibilities are 5 heads or 5 tails. (They are more structured than the others.) They are also the least likely, only 2 out of 32 possibilities. The most disorderly possibilities are 3 heads and 2 tails and its reverse. (They are the least structured.) The most disorderly possibilities are also the most likely, with 20 out of 32 possibilities for the 3 heads and 2 tails and its reverse. If we start with an orderly array like 5 heads and toss the coins, it is very likely that we will get a less orderly array as a result, since 30 out of the 32 possibilities are less orderly. So even if you start with an orderly state, there is a strong tendency to go from order to disorder, from low entropy to high entropy. The reverse can happen, but it is unlikely.

Macrostate

Number of microstates

Heads

Tails

(_W_)

100

0

1

99

1

1 . 0 × 10 2 1 . 0 × 10 2

95

5

7 . 5 × 10 7 7 . 5 × 10 7

90

10

1 . 7 × 10 13 1 . 7 × 10 13

75

25

2 . 4 × 10 23 2 . 4 × 10 23

60

40

1 . 4 × 10 28 1 . 4 × 10 28

55

45

6 . 1 × 10 28 6 . 1 × 10 28

51

49

9 . 9 × 10 28 9 . 9 × 10 28

50

50

1 . 0 × 10 29 1 . 0 × 10 29

49

51

9 . 9 × 10 28 9 . 9 × 10 28

45

55

6 . 1 × 10 28 6 . 1 × 10 28

40

60

1 . 4 × 10 28 1 . 4 × 10 28

25

75

2 . 4 × 10 23 2 . 4 × 10 23

10

90

1 . 7 × 10 13 1 . 7 × 10 13

5

95

7 . 5 × 10 7 7 . 5 × 10 7

1

99

1 . 0 × 10 2 1 . 0 × 10 2

0

100

1

Total: 1.27×10301.27×1030

Table 15.4 100-Coin Toss

This result becomes dramatic for larger systems. Consider what happens if you have 100 coins instead of just 5. The most orderly arrangements (most structured) are 100 heads or 100 tails. The least orderly (least structured) is that of 50 heads and 50 tails. There is only 1 way (1 microstate) to get the most orderly arrangement of 100 heads. There are 100 ways (100 microstates) to get the next most orderly arrangement of 99 heads and 1 tail (also 100 to get its reverse). And there are 1.0×10291.0×1029 ways to get 50 heads and 50 tails, the least orderly arrangement. [Table 15.4](15-7-statistical-interpretation-of-entropy-and-the-second-law-of-thermodynamics-the-underlying-explanation#import-auto-id1169738223876) is an abbreviated list of the various macrostates and the number of microstates for each macrostate. The total number of microstates—the total number of different ways 100 coins can be tossed—is an impressively large 1.27×10301.27×1030. Now, if we start with an orderly macrostate like 100 heads and toss the coins, there is a virtual certainty that we will get a less orderly macrostate. If we keep tossing the coins, it is possible, but exceedingly unlikely, that we will ever get back to the most orderly macrostate. If you tossed the coins once each second, you could expect to get either 100 heads or 100 tails once in 2×10222×1022 years! This period is 1 trillion (10121012) times longer than the age of the universe, and so the chances are essentially zero. In contrast, there is an 8% chance of getting 50 heads, a 73% chance of getting from 45 to 55 heads, and a 96% chance of getting from 40 to 60 heads. Disorder is highly likely.

### Disorder in a Gas

The fantastic growth in the odds favoring disorder that we see in going from 5 to 100 coins continues as the number of entities in the system increases. Let us now imagine applying this approach to perhaps a small sample of gas. Because counting microstates and macrostates involves statistics, this is called statistical analysis. The macrostates of a gas correspond to its macroscopic properties, such as volume, temperature, and pressure; and its microstates correspond to the detailed description of the positions and velocities of its atoms. Even a small amount of gas has a huge number of atoms: 1.0 cm31.0 cm3 of an ideal gas at 1.0 atm and 0º C0º C has 2.7×10192.7×1019 atoms. So each macrostate has an immense number of microstates. In plain language, this means that there are an immense number of ways in which the atoms in a gas can be arranged, while still having the same pressure, temperature, and so on.

The most likely conditions (or macrostates) for a gas are those we see all the time—a random distribution of atoms in space with a Maxwell-Boltzmann distribution of speeds in random directions, as predicted by kinetic theory. This is the most disorderly and least structured condition we can imagine. In contrast, one type of very orderly and structured macrostate has all of the atoms in one corner of a container with identical velocities. There are very few ways to accomplish this (very few microstates corresponding to it), and so it is exceedingly unlikely ever to occur. (See [Figure 15.38](15-7-statistical-interpretation-of-entropy-and-the-second-law-of-thermodynamics-the-underlying-explanation#import-auto-id1169738137203)(b).) Indeed, it is so unlikely that we have a law saying that it is impossible, which has never been observed to be violated—the second law of thermodynamics.

![Two states of a container of gas are shown. In state a, the gas molecules, depicted as small green spheres, are randomly distributed in the container, with random velocities (an arrow is attached to each sphere, and the arrows vary in length and direction). This state is labeled likely. In state b, the molecules are clustered in the lower left-hand corner of the container and the arrows are much shorter. This state is labeled highly unlikely.](/apps/image-cdn/v1/f=webp/apps/archive/20260105.231123/resources/14376e9e2d071fb43a729685f1f1c376ff662fa0)

Figure 15.38 (a) The ordinary state of gas in a container is a disorderly, random distribution of atoms or molecules with a Maxwell-Boltzmann distribution of speeds. It is so unlikely that these atoms or molecules would ever end up in one corner of the container that it might as well be impossible. (b) With energy transfer, the gas can be forced into one corner and its entropy greatly reduced. But left alone, it will spontaneously increase its entropy and return to the normal conditions, because they are immensely more likely.

The disordered condition is one of high entropy, and the ordered one has low entropy. With a transfer of energy from another system, we could force all of the atoms into one corner and have a local decrease in entropy, but at the cost of an overall increase in entropy of the universe. If the atoms start out in one corner, they will quickly disperse and become uniformly distributed and will never return to the orderly original state ([Figure 15.38](15-7-statistical-interpretation-of-entropy-and-the-second-law-of-thermodynamics-the-underlying-explanation#import-auto-id1169738137203)(b)). Entropy will increase. With such a large sample of atoms, it is possible—but unimaginably unlikely—for entropy to decrease. Disorder is vastly more likely than order.

The arguments that disorder and high entropy are the most probable states are quite convincing. The great Austrian physicist Ludwig Boltzmann (1844–1906)—who, along with Maxwell, made so many contributions to kinetic theory—proved that the entropy of a system in a given state (a macrostate) can be written as

S\=k lnW,S\=k lnW,

15.68

where k\=1.38×10−23J/Kk\=1.38×10−23J/K is Boltzmann’s constant, and lnWlnW is the natural logarithm of the number of microstates WW corresponding to the given macrostate. WW is proportional to the probability that the macrostate will occur. Thus entropy is directly related to the probability of a state—the more likely the state, the greater its entropy. Boltzmann proved that this expression for ss is equivalent to the definition ΔS\=Q/TΔS\=Q/T, which we have used extensively.

Thus the second law of thermodynamics is explained on a very basic level: entropy either remains the same or increases in every process. This phenomenon is due to the extraordinarily small probability of a decrease, based on the extraordinarily larger number of microstates in systems with greater entropy. Entropy _can_ decrease, but for any macroscopic system, this outcome is so unlikely that it will never be observed.

#### Entropy Increases in a Coin Toss

Suppose you toss 100 coins starting with 60 heads and 40 tails, and you get the most likely result, 50 heads and 50 tails. What is the change in entropy?

#### Strategy

Noting that the number of microstates is labeled WW in [Table 15.4](15-7-statistical-interpretation-of-entropy-and-the-second-law-of-thermodynamics-the-underlying-explanation#import-auto-id1169738223876) for the 100-coin toss, we can use ΔS\=Sf−Si\=k lnWf\-klnWiΔS\=Sf−Si\=k lnWf\-klnWi to calculate the change in entropy.

#### Solution

The change in entropy is

ΔS\=Sf–Si\=k lnWf–klnWi,ΔS\=Sf–Si\=k lnWf–klnWi,

15.69

where the subscript i stands for the initial 60 heads and 40 tails state, and the subscript f for the final 50 heads and 50 tails state. Substituting the values for WW from [Table 15.4](15-7-statistical-interpretation-of-entropy-and-the-second-law-of-thermodynamics-the-underlying-explanation#import-auto-id1169738223876) gives

ΔS \= ( 1 . 38 × 10 – 23 J/K ) \[ ln ( 1 . 0 × 10 29 ) – ln ( 1 . 4 × 10 28 ) \] \= 2.7 × 10 – 23 J/K ΔS \= ( 1 . 38 × 10 – 23 J/K ) \[ ln ( 1 . 0 × 10 29 ) – ln ( 1 . 4 × 10 28 ) \] \= 2.7 × 10 – 23 J/K

15.70

#### Discussion

This increase in entropy means we have moved to a less orderly situation. It is not impossible for further tosses to produce the initial state of 60 heads and 40 tails, but it is less likely. There is about a 1 in 90 chance for that decrease in entropy (–2.7×10–23 J/K–2.7×10–23 J/K) to occur. If we calculate the decrease in entropy to move to the most orderly state, we get ΔS\=–92×10–23 J/KΔS\=–92×10–23 J/K. There is about a 1 in 10301 in 1030 chance of this change occurring. So while very small decreases in entropy are unlikely, slightly greater decreases are impossibly unlikely. These probabilities imply, again, that for a macroscopic system, a decrease in entropy is impossible. For example, for heat transfer to occur spontaneously from 1.00 kg of 0ºC0ºC ice to its 0ºC0ºC environment, there would be a decrease in entropy of 1.22×103 J/K1.22×103 J/K. Given that a ΔS of 10–21 J/KΔS of 10–21 J/K corresponds to about a 1 in 10301 in 1030 chance, a decrease of this size (103 J/K103 J/K) is an _utter_ impossibility. Even for a milligram of melted ice to spontaneously refreeze is impossible.

1.  _Examine the situation to determine if entropy is involved._
2.  _Identify the system of interest and draw a labeled diagram of the system showing energy flow._
3.  _Identify exactly what needs to be determined in the problem (identify the unknowns)._ A written list is useful.
4.  _Make a list of what is given or can be inferred from the problem as stated (identify the knowns)._ You must carefully identify the heat transfer, if any, and the temperature at which the process takes place. It is also important to identify the initial and final states.
5.  _Solve the appropriate equation for the quantity to be determined (the unknown)._ Note that the change in entropy can be determined between any states by calculating it for a reversible process.
6.  _Substitute the known value along with their units into the appropriate equation, and obtain numerical solutions complete with units._
7.  _To see if it is reasonable: Does it make sense?_ For example, total entropy should increase for any real process or be constant for a reversible process. Disordered states should be more probable and have greater entropy than ordered states.