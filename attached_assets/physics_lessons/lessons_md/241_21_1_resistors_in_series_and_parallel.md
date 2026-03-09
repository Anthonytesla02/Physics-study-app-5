# 21.1 Resistors in Series and Parallel

[Original URL](https://openstax.org/books/college-physics-2e/pages/21-1-resistors-in-series-and-parallel)

## 21.1 Resistors in Series and Parallel

### Learning Objectives

By the end of this section, you will be able to:

*   Draw a circuit with resistors in parallel and in series.
*   Calculate the voltage drop of a current across a resistor using Ohm’s law.
*   Contrast the way total resistance is calculated for resistors in series and in parallel.
*   Explain why total resistance of a parallel circuit is less than the smallest resistance of any of the resistors in that circuit.
*   Calculate total resistance of a circuit that contains a mixture of resistors connected in series and in parallel.

Most circuits have more than one component, called a resistor that limits the flow of charge in the circuit. A measure of this limit on charge flow is called resistance. The simplest combinations of resistors are the series and parallel connections illustrated in [Figure 21.2](21-1-resistors-in-series-and-parallel#import-auto-id2989840). The total resistance of a combination of resistors depends on both their individual values and how they are connected.

![In part a of the figure, resistors labeled R sub 1, R sub 2, R sub 3, and R sub 4 are connected in series along one path of a circuit. In part b of the figure, the same resistors are connected along parallel paths of a circuit.](/apps/image-cdn/v1/f=webp/apps/archive/20260105.231123/resources/2c8890e211c28905409080a9c70784defc186e7e)

Figure 21.2 (a) A series connection of resistors. (b) A parallel connection of resistors.

### Resistors in Series

When are resistors in series? Resistors are in series whenever the flow of charge, called the current, must flow through devices sequentially. For example, if current flows through a person holding a screwdriver and into the Earth, then R1R1 in [Figure 21.2](21-1-resistors-in-series-and-parallel#import-auto-id2989840)(a) could be the resistance of the screwdriver’s shaft, R2R2 the resistance of its handle, R3R3 the person’s body resistance, and R4R4 the resistance of her shoes.

[Figure 21.3](21-1-resistors-in-series-and-parallel#import-auto-id3043995) shows resistors in series connected to a voltage source. It seems reasonable that the total resistance is the sum of the individual resistances, considering that the current has to pass through each resistor in sequence. (This fact would be an advantage to a person wishing to avoid an electrical shock, who could reduce the current by wearing high-resistance rubber-soled shoes. It could be a disadvantage if one of the resistances were a faulty high-resistance cord to an appliance that would reduce the operating current.)

![Two electrical circuits are compared. The first one has three resistors, R sub one, R sub two, and R sub three, connected in series with a voltage source V to form a closed circuit. The first circuit is equivalent to the second circuit, which has a single resistor R sub s connected to a voltage source V. Both circuits carry a current I, which starts from the positive end of the voltage source and moves in a clockwise direction around the circuit.](/apps/image-cdn/v1/f=webp/apps/archive/20260105.231123/resources/1a46429a37469573a0d7ec4a05d81cc1aa6e891f)

Figure 21.3 Three resistors connected in series to a battery (left) and the equivalent single or series resistance (right).

To verify that resistances in series do indeed add, let us consider the loss of electrical power, called a voltage drop, in each resistor in [Figure 21.3](21-1-resistors-in-series-and-parallel#import-auto-id3043995).

According to Ohm’s law, the voltage drop, VV, across a resistor when a current flows through it is calculated using the equation V\=IRV\=IR, where II equals the current in amps (A) and RR is the resistance in ohms ΩΩ. Another way to think of this is that VV is the voltage necessary to make a current II flow through a resistance RR.

So the voltage drop across R1R1 is V1\=IR1V1\=IR1, that across R2R2 is V2\=IR2V2\=IR2, and that across R3R3 is V3\=IR3V3\=IR3. The sum of these voltages equals the voltage output of the source; that is,

V\=V1+V2+V3.V\=V1+V2+V3.

21.1

This equation is based on the conservation of energy and conservation of charge. Electrical potential energy can be described by the equation PE\=qVPE\=qV, where qq is the electric charge and VV is the voltage. Thus the energy supplied by the source is qVqV, while that dissipated by the resistors is

qV1+qV2+qV3.qV1+qV2+qV3.

21.2

The derivations of the expressions for series and parallel resistance are based on the laws of conservation of energy and conservation of charge, which state that total charge and total energy are constant in any process. These two laws are directly involved in all electrical phenomena and will be invoked repeatedly to explain both specific effects and the general behavior of electricity.

These energies must be equal, because there is no other source and no other destination for energy in the circuit. Thus, qV\=qV1+qV2+qV3qV\=qV1+qV2+qV3. The charge qq cancels, yielding V\=V1+V2+V3V\=V1+V2+V3, as stated. (Note that the same amount of charge passes through the battery and each resistor in a given amount of time, since there is no capacitance to store charge, there is no place for charge to leak, and charge is conserved.)

Now substituting the values for the individual voltages gives

V\=IR1+IR2 +IR3 \=I(R1+R2+R3).V\=IR1+IR2 +IR3 \=I(R1+R2+R3).

21.3

Note that for the equivalent single series resistance RsRs, we have

V\=IRs.V\=IRs.

21.4

This implies that the total or equivalent series resistance RsRs of three resistors is Rs\=R1+R2+R3Rs\=R1+R2+R3.

This logic is valid in general for any number of resistors in series; thus, the total resistance RsRs of a series connection is

Rs\=R1+R2+R3+...,Rs\=R1+R2+R3+...,

21.5

as proposed. Since all of the current must pass through each resistor, it experiences the resistance of each, and resistances in series simply add up.

#### Calculating Resistance, Current, Voltage Drop, and Power Dissipation: Analysis of a Series Circuit

Suppose the voltage output of the battery in [Figure 21.3](21-1-resistors-in-series-and-parallel#import-auto-id3043995) is 12.0V12.0V, and the resistances are R1\=1.00ΩR1\=1.00Ω, R2\=6.00ΩR2\=6.00Ω, and R3\=13.0ΩR3\=13.0Ω. (a) What is the total resistance? (b) Find the current. (c) Calculate the voltage drop in each resistor, and show these add to equal the voltage output of the source. (d) Calculate the power dissipated by each resistor. (e) Find the power output of the source, and show that it equals the total power dissipated by the resistors.

#### Strategy and Solution for (a)

The total resistance is simply the sum of the individual resistances, as given by this equation:

R s \= R 1 + R 2 + R 3 \= 1.00 Ω+6.00 Ω+13.0 Ω \=20.0 Ω. R s \= R 1 + R 2 + R 3 \= 1.00 Ω+6.00 Ω+13.0 Ω \=20.0 Ω.

21.6

#### Strategy and Solution for (b)

The current is found using Ohm’s law, V\=IRV\=IR. Entering the value of the applied voltage and the total resistance yields the current for the circuit:

I\=VRs\=12.0 V20.0 Ω\=0.600 A.I\=VRs\=12.0 V20.0 Ω\=0.600 A.

21.7

#### Strategy and Solution for (c)

The voltage—or IRIR drop—in a resistor is given by Ohm’s law. Entering the current and the value of the first resistance yields

V1\=IR1\=(0.600 A)(1.0Ω)\=0.600 V.V1\=IR1\=(0.600 A)(1.0Ω)\=0.600 V.

21.8

Similarly,

V 2 \= IR 2 \= ( 0 . 600 A ) ( 6 . 0 Ω ) \= 3 . 60 V V 2 \= IR 2 \= ( 0 . 600 A ) ( 6 . 0 Ω ) \= 3 . 60 V

21.9

and

V3\=IR3\=(0.600 A)(13.0Ω)\=7.80 V.V3\=IR3\=(0.600 A)(13.0Ω)\=7.80 V.

21.10

#### Discussion for (c)

The three IRIR drops add to 12.0V12.0V, as predicted:

V1+V2+V3\=(0.600+3.60+7.80)V\=12.0 V.V1+V2+V3\=(0.600+3.60+7.80)V\=12.0 V.

21.11

#### Strategy and Solution for (d)

The easiest way to calculate power in watts (W) dissipated by a resistor in a DC circuit is to use Joule’s law, P\=IVP\=IV, where PP is electric power. In this case, each resistor has the same full current flowing through it. By substituting Ohm’s law V\=IRV\=IR into Joule’s law, we get the power dissipated by the first resistor as

P1\=I2R1\=(0.600 A)2(1.00Ω)\=0.360 W.P1\=I2R1\=(0.600 A)2(1.00Ω)\=0.360 W.

21.12

Similarly,

P 2 \= I 2 R 2 \= ( 0 . 600 A ) 2 ( 6 . 00 Ω ) \= 2 . 16 W P 2 \= I 2 R 2 \= ( 0 . 600 A ) 2 ( 6 . 00 Ω ) \= 2 . 16 W

21.13

and

P3\=I2R3\=(0.600 A)2(13.0Ω)\=4.68 W.P3\=I2R3\=(0.600 A)2(13.0Ω)\=4.68 W.

21.14

#### Discussion for (d)

Power can also be calculated using either P\=IVP\=IV or P\=V2RP\=V2R, where VV is the voltage drop across the resistor (not the full voltage of the source). The same values will be obtained.

#### Strategy and Solution for (e)

The easiest way to calculate power output of the source is to use P\=IVP\=IV, where VV is the source voltage. This gives

P\=(0.600 A)(12.0 V)\=7.20 W.P\=(0.600 A)(12.0 V)\=7.20 W.

21.15

#### Discussion for (e)

Note, coincidentally, that the total power dissipated by the resistors is also 7.20 W, the same as the power put out by the source. That is,

P1+P2+P3\=(0.360+2.16+4.68)W\=7.20 W.P1+P2+P3\=(0.360+2.16+4.68)W\=7.20 W.

21.16

Power is energy per unit time (watts), and so conservation of energy requires the power output of the source to be equal to the total power dissipated by the resistors.

1.  Series resistances add: Rs\=R1+R2+R3+....Rs\=R1+R2+R3+....
2.  The same current flows through each resistor in series.
3.  Individual resistors in series do not get the total source voltage, but divide it.

### Resistors in Parallel

[Figure 21.4](21-1-resistors-in-series-and-parallel#import-auto-id1926821) shows resistors in parallel, wired to a voltage source. Resistors are in parallel when each resistor is connected directly to the voltage source by connecting wires having negligible resistance. Each resistor thus has the full voltage of the source applied to it.

Each resistor draws the same current it would if it alone were connected to the voltage source (provided the voltage source is not overloaded). For example, an automobile’s headlights, radio, and so on, are wired in parallel, so that they utilize the full voltage of the source and can operate completely independently. The same is true in your house, or any building. (See [Figure 21.4](21-1-resistors-in-series-and-parallel#import-auto-id1926821)(b).)

![Part a shows two electrical circuits which are compared. The first electrical circuit is arranged with resistors in parallel. The circuit has three paths, with a voltage source V at one end. Just after the voltage source, the circuit has current I. The first path has resistor R sub one and current I sub one after the resistor. The second path has resistor R sub two and current I sub two after the resistor. The third path has resistor R sub three with current I sub three after the resistor. The first circuit is equivalent to the second circuit. The second circuit has a voltage source V and an equivalent parallel resistance R sub p. Part b shows a complicated electrical wiring diagram of a distribution board that supplies electricity to a house.](/apps/image-cdn/v1/f=webp/apps/archive/20260105.231123/resources/23e182129b10541177b91f89fd0318f4fa651256)

Figure 21.4 (a) Three resistors connected in parallel to a battery and the equivalent single or parallel resistance. (b) Electrical power setup in a house. (credit: Dmitry G, Wikimedia Commons)

To find an expression for the equivalent parallel resistance RpRp, let us consider the currents that flow and how they are related to resistance. Since each resistor in the circuit has the full voltage, the currents flowing through the individual resistors are I1\=VR1I1\=VR1, I2\=VR2I2\=VR2, and I3\=VR3I3\=VR3. Conservation of charge implies that the total current II produced by the source is the sum of these currents:

I\=I1+I2+I3.I\=I1+I2+I3.

21.17

Substituting the expressions for the individual currents gives

I\=VR1+VR2+VR3\=V1R1+1R2+1R3.I\=VR1+VR2+VR3\=V1R1+1R2+1R3.

21.18

Note that Ohm’s law for the equivalent single resistance gives

I\=VRp\=V1Rp.I\=VRp\=V1Rp.

21.19

The terms inside the parentheses in the last two equations must be equal. Generalizing to any number of resistors, the total resistance RpRp of a parallel connection is related to the individual resistances by

1 R p \= 1 R 1 + 1 R 2 + 1 R . 3 + . ... 1 R p \= 1 R 1 + 1 R 2 + 1 R . 3 + . ...

21.20

This relationship results in a total resistance RpRp that is less than the smallest of the individual resistances. (This is seen in the next example.) When resistors are connected in parallel, more current flows from the source than would flow for any of them individually, and so the total resistance is lower.

#### Calculating Resistance, Current, Power Dissipation, and Power Output: Analysis of a Parallel Circuit

Let the voltage output of the battery and resistances in the parallel connection in [Figure 21.4](21-1-resistors-in-series-and-parallel#import-auto-id1926821) be the same as the previously considered series connection: V\=12.0 VV\=12.0 V, R1\=1.00ΩR1\=1.00Ω, R2\=6.00ΩR2\=6.00Ω, and R3\=13.0ΩR3\=13.0Ω. (a) What is the total resistance? (b) Find the total current. (c) Calculate the currents in each resistor, and show these add to equal the total current output of the source. (d) Calculate the power dissipated by each resistor. (e) Find the power output of the source, and show that it equals the total power dissipated by the resistors.

#### Strategy and Solution for (a)

The total resistance for a parallel combination of resistors is found using the equation below. Entering known values gives

1Rp\=1R1+1R2+1R3\=11.00Ω+16.00Ω+113.0Ω.1Rp\=1R1+1R2+1R3\=11.00Ω+16.00Ω+113.0Ω.

21.21

Thus,

1Rp\=1.00 Ω+0.1667Ω+0.07692Ω\=1.2436Ω.1Rp\=1.00 Ω+0.1667Ω+0.07692Ω\=1.2436Ω.

21.22

(Note that in these calculations, each intermediate answer is shown with an extra digit.)

We must invert this to find the total resistance RpRp. This yields

R p \= 1 1 . 2436 Ω \= 0 . 8041 Ω . R p \= 1 1 . 2436 Ω \= 0 . 8041 Ω .

21.23

The total resistance with the correct number of significant digits is R p \= 0 . 804 Ω . R p \= 0 . 804 Ω .

#### Discussion for (a)

RpRp is, as predicted, less than the smallest individual resistance.

#### Strategy and Solution for (b)

The total current can be found from Ohm’s law, substituting RpRp for the total resistance. This gives

I\=VRp\=12.0 V0.8041 Ω\=14.92 A.I\=VRp\=12.0 V0.8041 Ω\=14.92 A.

21.24

#### Discussion for (b)

Current II for each device is much larger than for the same devices connected in series (see the previous example). A circuit with parallel connections has a smaller total resistance than the resistors connected in series.

#### Strategy and Solution for (c)

The individual currents are easily calculated from Ohm’s law, since each resistor gets the full voltage. Thus,

I1\=VR1\=12.0 V1.00 Ω\=12.0 A.I1\=VR1\=12.0 V1.00 Ω\=12.0 A.

21.25

Similarly,

I 2 \= V R 2 \= 12 . 0 V 6 . 00 Ω \= 2 . 00 A I 2 \= V R 2 \= 12 . 0 V 6 . 00 Ω \= 2 . 00 A

21.26

and

I3\=VR3\=12.0 V13.0 Ω\=0.92 A.I3\=VR3\=12.0 V13.0 Ω\=0.92 A.

21.27

#### Discussion for (c)

The total current is the sum of the individual currents:

I1+I2+I3\=14.92 A.I1+I2+I3\=14.92 A.

21.28

This is consistent with conservation of charge.

#### Strategy and Solution for (d)

The power dissipated by each resistor can be found using any of the equations relating power to current, voltage, and resistance, since all three are known. Let us use P\=V2RP\=V2R, since each resistor gets full voltage. Thus,

P1\=V2R1\=(12.0 V)21.00 Ω\=144 W.P1\=V2R1\=(12.0 V)21.00 Ω\=144 W.

21.29

Similarly,

P 2 \= V 2 R 2 \= ( 12 . 0 V ) 2 6 . 00 Ω \= 24 . 0 W P 2 \= V 2 R 2 \= ( 12 . 0 V ) 2 6 . 00 Ω \= 24 . 0 W

21.30

and

P3\=V2R3\=(12.0 V)213.0 Ω\=11.1 W.P3\=V2R3\=(12.0 V)213.0 Ω\=11.1 W.

21.31

#### Discussion for (d)

The power dissipated by each resistor is considerably higher in parallel than when connected in series to the same voltage source.

#### Strategy and Solution for (e)

The total power can also be calculated in several ways. Choosing P\=IVP\=IV, and entering the total current, yields

P\=IV\=(14.92 A)(12.0 V)\=179 W.P\=IV\=(14.92 A)(12.0 V)\=179 W.

21.32

#### Discussion for (e)

Total power dissipated by the resistors is also 179 W:

P 1 + P 2 + P 3 \= 144 W + 24 . 0 W + 11 . 1 W \= 179 W . P 1 + P 2 + P 3 \= 144 W + 24 . 0 W + 11 . 1 W \= 179 W .

21.33

This is consistent with the law of conservation of energy.

#### Overall Discussion

Note that both the currents and powers in parallel connections are greater than for the same devices in series.

1.  Parallel resistance is found from 1Rp\=1R1+1R2+1R3+...1Rp\=1R1+1R2+1R3+..., and it is smaller than any individual resistance in the combination.
2.  Each resistor in parallel has the same full voltage of the source applied to it. (Power distribution systems most often use parallel connections to supply the myriad devices served with the same voltage and to allow them to operate independently.)
3.  Parallel resistors do not each get the total current; they divide it.

### Combinations of Series and Parallel

More complex connections of resistors are sometimes just combinations of series and parallel. These are commonly encountered, especially when wire resistance is considered. In that case, wire resistance is in series with other resistances that are in parallel.

Combinations of series and parallel can be reduced to a single equivalent resistance using the technique illustrated in [Figure 21.5](21-1-resistors-in-series-and-parallel#import-auto-id3357836). Various parts are identified as either series or parallel, reduced to their equivalents, and further reduced until a single resistance is left. The process is more time consuming than difficult.

![The diagram has a set of five circuits. The first circuit has a combination of seven resistors in series and parallel combinations. It has a resistor R sub one in series with a set of three resistors R sub two, R sub three, and R sub four in parallel and connected in series with a combination of resistors R sub five and R sub six, which are parallel. A resistor R sub seven is connected in parallel to R sub one and the voltage source. The second circuit calculates combinations of all parallel resistors in circuit one and replaces them with their equivalent resistance. It has a resistor R sub one in series with R sub p and R sub p prime. A resistor R sub seven is connected in parallel to R sub one and the voltage source. The third circuit takes the combination of the series resistors R sub p and R sub p prime and replaces it with R sub s. It has a resistor R sub one in series with R sub s. A resistor R sub seven is connected in parallel to R sub s and the voltage source. The fourth circuit shows a parallel combination of R sub seven and R sub s are calculated and replaced by R sub p double prime. The circuit now has a series combination voltage source, R sub one and R sub p double prime. The fifth circuit shows the final equivalent of the first circuit. It has a voltage source connecting across a final equivalent resistance R sub s prime.](/apps/image-cdn/v1/f=webp/apps/archive/20260105.231123/resources/b3e95e7bfce1a4bfe3574540a8ca56c93eb287f0)

Figure 21.5 This combination of seven resistors has both series and parallel parts. Each is identified and reduced to an equivalent resistance, and these are further reduced until a single equivalent resistance is reached.

The simplest combination of series and parallel resistance, shown in [Figure 21.6](21-1-resistors-in-series-and-parallel#import-auto-id3085827), is also the most instructive, since it is found in many applications. For example, R1R1 could be the resistance of wires from a car battery to its electrical devices, which are in parallel. R2R2 and R3R3 could be the starter motor and a passenger compartment light. We have previously assumed that wire resistance is negligible, but, when it is not, it has important effects, as the next example indicates.

#### Calculating Resistance, IRIR Drop, Current, and Power Dissipation: Combining Series and Parallel Circuits

[Figure 21.6](21-1-resistors-in-series-and-parallel#import-auto-id3085827) shows the resistors from the previous two examples wired in a different way—a combination of series and parallel. We can consider R1R1 to be the resistance of wires leading to R2R2 and R3R3. (a) Find the total resistance. (b) What is the IRIR drop in R1R1? (c) Find the current I2I2 through R2R2. (d) What power is dissipated by R2R2?

![Circuit diagram in which a battery of twelve point zero volts is connected to a combination of three resistors. Resistors R sub two and R sub three are connected in parallel to each other, and their combination is connected in series to resistor R sub one. R sub one has a resistance of one point zero zero ohms, R sub two has a resistance of six point zero zero ohms, and R sub three has a resistance of thirteen point zero ohms.](/apps/image-cdn/v1/f=webp/apps/archive/20260105.231123/resources/bd9d6947504f5aee9a263469c3b3b471d60977fc)

Figure 21.6 These three resistors are connected to a voltage source so that R2R2 and R3R3 are in parallel with one another and that combination is in series with R1R1.

#### Strategy and Solution for (a)

To find the total resistance, we note that R2R2 and R3R3 are in parallel and their combination RpRp is in series with R1R1. Thus the total (equivalent) resistance of this combination is

Rtot\=R1+Rp.Rtot\=R1+Rp.

21.34

First, we find RpRp using the equation for resistors in parallel and entering known values:

1Rp\=1R2+1R3\=16.00Ω+113.0Ω\=0.2436Ω.1Rp\=1R2+1R3\=16.00Ω+113.0Ω\=0.2436Ω.

21.35

Inverting gives

Rp\=10.2436Ω\=4.11Ω.Rp\=10.2436Ω\=4.11Ω.

21.36

So the total resistance is

Rtot\=R1+Rp\=1.00Ω+4.11 Ω\=5.11 Ω.Rtot\=R1+Rp\=1.00Ω+4.11 Ω\=5.11 Ω.

21.37

#### Discussion for (a)

The total resistance of this combination is intermediate between the pure series and pure parallel values (20.0 Ω20.0 Ω and 0.804 Ω0.804 Ω, respectively) found for the same resistors in the two previous examples.

#### Strategy and Solution for (b)

To find the IRIR drop in R1R1, we note that the full current II flows through R1R1. Thus its IRIR drop is

V1\=IR1.V1\=IR1.

21.38

We must find II before we can calculate V1V1. The total current II is found using Ohm’s law for the circuit. That is,

I\=VRtot\=12.0 V5.11 Ω\=2.35A.I\=VRtot\=12.0 V5.11 Ω\=2.35A.

21.39

Entering this into the expression above, we get

V1\=IR1\=(2.35 A)(1.00Ω)\=2.35 V.V1\=IR1\=(2.35 A)(1.00Ω)\=2.35 V.

21.40

#### Discussion for (b)

The voltage applied to R2R2 and R3R3 is less than the total voltage by an amount V1V1. When wire resistance is large, it can significantly affect the operation of the devices represented by R2R2 and R3R3.

#### Strategy and Solution for (c)

To find the current through R2R2, we must first find the voltage applied to it. We call this voltage VpVp, because it is applied to a parallel combination of resistors. The voltage applied to both R2R2 and R3R3 is reduced by the amount V1V1, and so it is

Vp\=V−V1\=12.0 V−2.35 V\=9.65 V.Vp\=V−V1\=12.0 V−2.35 V\=9.65 V.

21.41

Now the current I2I2 through resistance R2R2 is found using Ohm’s law:

I2\=VpR2\=9.65 V6.00 Ω\=1.61 A.I2\=VpR2\=9.65 V6.00 Ω\=1.61 A.

21.42

#### Discussion for (c)

The current is less than the 2.00 A that flowed through R2R2 when it was connected in parallel to the battery in the previous parallel circuit example.

#### Strategy and Solution for (d)

The power dissipated by R2R2 is given by

P2\=(I2)2R2\=(1.61 A)2(6.00Ω)\=15.5 W.P2\=(I2)2R2\=(1.61 A)2(6.00Ω)\=15.5 W.

21.43

#### Discussion for (d)

The power is less than the 24.0 W this resistor dissipated when connected in parallel to the 12.0-V source.

### Practical Implications

One implication of this last example is that resistance in wires reduces the current and power delivered to a resistor. If wire resistance is relatively large, as in a worn (or a very long) extension cord, then this loss can be significant. If a large current is drawn, the IRIR drop in the wires can also be significant.

For example, when you are rummaging in the refrigerator and the motor comes on, the refrigerator light dims momentarily. Similarly, you can see the passenger compartment light dim when you start the engine of your car (although this may be due to resistance inside the battery itself).

What is happening in these high-current situations is illustrated in [Figure 21.7](21-1-resistors-in-series-and-parallel#import-auto-id2452527). The device represented by R3R3 has a very low resistance, and so when it is switched on, a large current flows. This increased current causes a larger IRIR drop in the wires represented by R1R1, reducing the voltage across the light bulb (which is R2R2), which then dims noticeably.

![A conceptual drawing showing a refrigerator with its motor and light bulbs connected to a household A C circuit through a wire with resistance of R sub one. The bulb has a resistance R sub two, and the motor has a resistance R sub three.](/apps/image-cdn/v1/f=webp/apps/archive/20260105.231123/resources/6a917fe44dd642f5b4415163a198ffe0f163e1b6)

Figure 21.7 Why do lights dim when a large appliance is switched on? The answer is that the large current the appliance motor draws causes a significant IRIR drop in the wires and reduces the voltage across the light.

Can any arbitrary combination of resistors be broken down into series and parallel combinations? See if you can draw a circuit diagram of resistors that cannot be broken down into combinations of series and parallel.

#### Solution

No, there are many ways to connect resistors that are not combinations of series and parallel, including loops and junctions. In such cases Kirchhoff’s rules, to be introduced in [Kirchhoff’s Rules](21-3-kirchhoffs-rules), will allow you to analyze the circuit.

1.  Draw a clear circuit diagram, labeling all resistors and voltage sources. This step includes a list of the knowns for the problem, since they are labeled in your circuit diagram.
2.  Identify exactly what needs to be determined in the problem (identify the unknowns). A written list is useful.
3.  Determine whether resistors are in series, parallel, or a combination of both series and parallel. Examine the circuit diagram to make this assessment. Resistors are in series if the same current must pass sequentially through them.
4.  Use the appropriate list of major features for series or parallel connections to solve for the unknowns. There is one list for series and another for parallel. If your problem has a combination of series and parallel, reduce it in steps by considering individual groups of series or parallel connections, as done in this module and the examples. Special note: When finding R p R p , the reciprocal must be taken with care.
5.  Check to see whether the answers are reasonable and consistent. Units and numerical results must be reasonable. Total series resistance should be greater, whereas total parallel resistance should be smaller, for example. Power should be greater for the same devices in parallel compared with series, and so on.