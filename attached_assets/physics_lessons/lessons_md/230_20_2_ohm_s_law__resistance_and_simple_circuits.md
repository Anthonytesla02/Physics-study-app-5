# 20.2 Ohm’s Law: Resistance and Simple Circuits

[Original URL](https://openstax.org/books/college-physics-2e/pages/20-2-ohms-law-resistance-and-simple-circuits)

## 20.2 Ohm’s Law: Resistance and Simple Circuits

### Learning Objectives

By the end of this section, you will be able to:

*   Explain the origin of Ohm’s law.
*   Calculate voltages, currents, or resistances with Ohm’s law.
*   Explain what an ohmic material is.
*   Describe a simple circuit.

What drives current? We can think of various devices—such as batteries, generators, wall outlets, and so on—which are necessary to maintain a current. All such devices create a potential difference and are loosely referred to as voltage sources. When a voltage source is connected to a conductor, it applies a potential difference VV that creates an electric field. The electric field in turn exerts force on charges, causing current.

### Ohm’s Law

The current that flows through most substances is directly proportional to the voltage VV applied to it. The German physicist Georg Simon Ohm (1787–1854) was the first to demonstrate experimentally that the current in a metal wire is _directly proportional to the voltage applied_:

I∝V.I∝V.

20.12

This important relationship is known as Ohm’s law. It can be viewed as a cause-and-effect relationship, with voltage the cause and current the effect. This is an empirical law like that for friction—an experimentally observed phenomenon. Such a linear relationship doesn’t always occur.

### Resistance and Simple Circuits

If voltage drives current, what impedes it? The electric property that impedes current (crudely similar to friction and air resistance) is called resistance RR. Collisions of moving charges with atoms and molecules in a substance transfer energy to the substance and limit current. Resistance is defined as inversely proportional to current, or

I∝1R.I∝1R.

20.13

Thus, for example, current is cut in half if resistance doubles. Combining the relationships of current to voltage and current to resistance gives

I\=VR.I\=VR.

20.14

This relationship is also called Ohm’s law. Ohm’s law in this form really defines resistance for certain materials. Ohm’s law (like Hooke’s law) is not universally valid. The many substances for which Ohm’s law holds are called ohmic. These include good conductors like copper and aluminum, and some poor conductors under certain circumstances. Ohmic materials have a resistance RR that is independent of voltage VV and current II. An object that has simple resistance is called a _resistor_, even if its resistance is small. The unit for resistance is an ohm and is given the symbol ΩΩ (upper case Greek omega). Rearranging I\=V/RI\=V/R gives R\=V/IR\=V/I, and so the units of resistance are 1 ohm = 1 volt per ampere:

1 Ω\= 1 VA.1 Ω\= 1 VA.

20.15

[Figure 20.8](20-2-ohms-law-resistance-and-simple-circuits#import-auto-id1170614065419) shows the schematic for a simple circuit. A simple circuit has a single voltage source and a single resistor. The wires connecting the voltage source to the resistor can be assumed to have negligible resistance, or their resistance can be included in RR.

![The figure describes a simple electric circuit with a battery connected to a resistance R. The direction of current is shown to emerge from the positive terminal of a battery of voltage V, pass through the resistor, and enter the negative terminal of the battery. The current I in the circuit is V divided by R, moving in a clockwise direction.](/apps/image-cdn/v1/f=webp/apps/archive/20260105.231123/resources/327ecf14de4e2a01fbef98ad0816f63547ef00f8)

Figure 20.8 A simple electric circuit in which a closed path for current to flow is supplied by conductors (usually metal wires) connecting a load to the terminals of a battery, represented by the red parallel lines. The zigzag symbol represents the single resistor and includes any resistance in the connections to the voltage source.

#### Calculating Resistance: An Automobile Headlight

What is the resistance of an automobile headlight through which 2.50 A flows when 12.0 V is applied to it?

#### Strategy

We can rearrange Ohm’s law as stated by I\=V/RI\=V/R and use it to find the resistance.

#### Solution

Rearranging I\=V/RI\=V/R and substituting known values gives

R\=VI\=12.0 V2.50 A\= 4.80 Ω.R\=VI\=12.0 V2.50 A\= 4.80 Ω.

20.16

#### Discussion

This is a relatively small resistance, but it is larger than the cold resistance of the headlight. As we shall see in [Resistance and Resistivity](20-3-resistance-and-resistivity), resistance usually increases with temperature, and so the bulb has a lower resistance when it is first switched on and will draw considerably more current during its brief warm-up period.

Resistances range over many orders of magnitude. Some ceramic insulators, such as those used to support power lines, have resistances of 1012Ω1012Ω or more. A dry person may have a hand-to-foot resistance of 105Ω105Ω, whereas the resistance of the human heart is about 103Ω103Ω. A meter-long piece of large-diameter copper wire may have a resistance of 10−5Ω10−5Ω, and superconductors have no resistance at all (they are non-ohmic). Resistance is related to the shape of an object and the material of which it is composed, as will be seen in [Resistance and Resistivity](20-3-resistance-and-resistivity).

Additional insight is gained by solving I\=V/RI\=V/R for V,V, yielding

V\=IR.V\=IR.

20.17

This expression for VV can be interpreted as the _voltage drop across a resistor produced by the flow of current_ II. The phrase IRIR _drop_ is often used for this voltage. For instance, the headlight in [Example 20.4](20-2-ohms-law-resistance-and-simple-circuits#fs-id3120142) has an IRIR drop of 12.0 V. If voltage is measured at various points in a circuit, it will be seen to increase at the voltage source and decrease at the resistor. Voltage is similar to fluid pressure. The voltage source is like a pump, creating a pressure difference, causing current—the flow of charge. The resistor is like a pipe that reduces pressure and limits flow because of its resistance. Conservation of energy has important consequences here. The voltage source supplies energy (causing an electric field and a current), and the resistor converts it to another form (such as thermal energy). In a simple circuit (one with a single simple resistor), the voltage supplied by the source equals the voltage drop across the resistor, since PE\=qΔVPE\=qΔV, and the same qq flows through each. Thus the energy supplied by the voltage source and the energy converted by the resistor are equal. (See [Figure 20.9](20-2-ohms-law-resistance-and-simple-circuits#import-auto-id1170614044913).)

![The figure shows a simple electric circuit. A battery is connected to a resistor with resistance R, and a voltmeter is connected across the resistor. The direction of current is shown to emerge from the positive terminal of the battery of voltage V, pass through the resistor, and enter the negative terminal of the battery, in a clockwise direction. The voltage V in the circuit equals I R, which equals 18 volts.](/apps/image-cdn/v1/f=webp/apps/archive/20260105.231123/resources/23b518766fc782980738a1595013ce7eebacedca)

Figure 20.9 The voltage drop across a resistor in a simple circuit equals the voltage output of the battery.

#### Making Connections: Conservation of Energy

In a simple electrical circuit, the sole resistor converts energy supplied by the source into another form. Conservation of energy is evidenced here by the fact that all of the energy supplied by the source is converted to another form by the resistor alone. We will find that conservation of energy has other important applications in circuits and is a powerful tool in circuit analysis.

#### Ohm's Law

See how the equation form of Ohm's law relates to a simple circuit. Adjust the voltage and resistance, and see the current change according to Ohm's law. The sizes of the symbols in the equation change to match the circuit diagram.

[Access multimedia content](http://openstax.org/books/college-physics-2e/pages/20-2-ohms-law-resistance-and-simple-circuits)