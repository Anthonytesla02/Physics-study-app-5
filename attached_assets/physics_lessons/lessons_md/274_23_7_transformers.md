# 23.7 Transformers

[Original URL](https://openstax.org/books/college-physics-2e/pages/23-7-transformers)

## 23.7 Transformers

### Learning Objectives

By the end of this section, you will be able to:

*   Explain how a transformer works.
*   Calculate voltage, current, and/or number of turns given the other quantities.

Transformers do what their name implies—they transform voltages from one value to another (The term voltage is used rather than emf, because transformers have internal resistance). For example, many cell phones, laptops, video games, and power tools and small appliances have a transformer built into their plug-in unit (like that in [Figure 23.25](23-7-transformers#import-auto-id1169737908289)) that changes 120 V or 240 V AC into whatever voltage the device uses. Transformers are also used at several points in the power distribution systems, such as illustrated in [Figure 23.26](23-7-transformers#import-auto-id1169737803698). Power is sent long distances at high voltages, because less current is required for a given amount of power, and this means less line loss, as was discussed previously. But high voltages pose greater hazards, so that transformers are employed to produce lower voltage at the user’s location.

![A photo graph of two plug in transformers operated on voltages other than common one hundred twenty volt AC.](/apps/image-cdn/v1/f=webp/apps/archive/20260105.231123/resources/6ff3493ee5f9fd064a4b848fe683dc4f970d8a51)

Figure 23.25 Plug-in transformers are used in low voltage applications such as lighting and for using US products (where the outlet voltage is 120 V) in Europe (where the voltage is 230 V) and vice versa. Transformers are also essential components in consumer electronic devices. (credit: Tamar More)

![The figure shows a transmission power system. It shows the various stages in a power transmission system from the power plant to the house hold with the help of images. The first image is of a power plant. The voltage generated is at twelve volts. This voltage is shown to pass on to a step up transformer through cables. From the step up transformer the current passes through a high voltage transmission line at four hundred kilo volt. The high voltage transmission line is shown passing on three towers. The current is then passed to a step down transformer substation. The current is step down to twelve volts. This is now passed through power transmission lines on poles. This current reaches a step down transformer which is fixed on a pole. Here the voltage is further stepped down to two hundred forty volts. Current is then supplied to an individual household at two hundred forty volts.](/apps/image-cdn/v1/f=webp/apps/archive/20260105.231123/resources/c390819e146210ccf9377970ab74c3b17b3b263c)

Figure 23.26 Transformers change voltages at several points in a power distribution system. Electric power is usually generated at greater than 10 kV, and transmitted long distances at voltages over 200 kV—sometimes as great as 700 kV—to limit energy losses. Local power distribution to neighborhoods or industries goes through a substation and is sent short distances at voltages ranging from 5 to 13 kV. This is reduced to 120, 240, or 480 V for safety at the individual user site.

The type of transformer considered in this text—see [Figure 23.27](23-7-transformers#import-auto-id1169738052317)—is based on Faraday’s law of induction and is very similar in construction to the apparatus Faraday used to demonstrate magnetic fields could cause currents. The two coils are called the _primary_ and _secondary coils_. In normal use, the input voltage is placed on the primary, and the secondary produces the transformed output voltage. Not only does the iron core trap the magnetic field created by the primary coil, its magnetization increases the field strength. Since the input voltage is AC, a time-varying magnetic flux is sent to the secondary, inducing its AC output voltage.

![The figure shows a simple transformer with two coils wound on either sides of a laminated ferromagnetic core. The set of coil on left side of the core is marked as the primary and there number is given as N p. The voltage across the primary is given by V p. The set of coil on right side of the core is marked as the secondary and there number is represented as N s. The voltage across the secondary is given by V s. A symbol of the transformer is also shown below the diagram. It consists of two inductor coils separated by two equal parallel lines representing the core.](/apps/image-cdn/v1/f=webp/apps/archive/20260105.231123/resources/5c2e61c1a868a6eba8d1d85de48e5f0edcc6d468)

Figure 23.27 A typical construction of a simple transformer has two coils wound on a ferromagnetic core that is laminated to minimize eddy currents. The magnetic field created by the primary is mostly confined to and increased by the core, which transmits it to the secondary coil. Any change in current in the primary induces a current in the secondary.

For the simple transformer shown in [Figure 23.27](23-7-transformers#import-auto-id1169738052317), the output voltage VsVs depends almost entirely on the input voltage VpVp and the ratio of the number of loops in the primary and secondary coils. Faraday’s law of induction for the secondary coil gives its induced output voltage VsVs to be

Vs\=−NsΔΦΔt,Vs\=−NsΔΦΔt,

23.24

where NsNs is the number of loops in the secondary coil and ΔΦΔΦ/ ΔtΔt is the rate of change of magnetic flux. Note that the output voltage equals the induced emf (Vs\=emfsVs\=emfs), provided coil resistance is small (a reasonable assumption for transformers). The cross-sectional area of the coils is the same on either side, as is the magnetic field strength, and so ΔΦ/ΔtΔΦ/Δt is the same on either side. The input primary voltage VpVp is also related to changing flux by

Vp\=−NpΔΦΔt.Vp\=−NpΔΦΔt.

23.25

The reason for this is a little more subtle. Lenz’s law tells us that the primary coil opposes the change in flux caused by the input voltage VpVp, hence the minus sign (This is an example of _self-inductance_, a topic to be explored in some detail in later sections). Assuming negligible coil resistance, Kirchhoff’s loop rule tells us that the induced emf exactly equals the input voltage. Taking the ratio of these last two equations yields a useful relationship:

VsVp\=NsNp.VsVp\=NsNp.

23.26

This is known as the transformer equation, and it simply states that the ratio of the secondary to primary voltages in a transformer equals the ratio of the number of loops in their coils.

The output voltage of a transformer can be less than, greater than, or equal to the input voltage, depending on the ratio of the number of loops in their coils. Some transformers even provide a variable output by allowing connection to be made at different points on the secondary coil. A step-up transformer is one that increases voltage, whereas a step-down transformer decreases voltage. Assuming, as we have, that resistance is negligible, the electrical power output of a transformer equals its input. This is nearly true in practice—transformer efficiency often exceeds 99%. Equating the power input and output,

Pp\=IpVp\=IsVs\=Ps.Pp\=IpVp\=IsVs\=Ps.

23.27

Rearranging terms gives

VsVp\=IpIs.VsVp\=IpIs.

23.28

Combining this with VsVp\=NsNpVsVp\=NsNp, we find that

I s I p \= N p N s I s I p \= N p N s

23.29

is the relationship between the output and input currents of a transformer. So if voltage increases, current decreases. Conversely, if voltage decreases, current increases.

#### Calculating Characteristics of a Step-Up Transformer

A portable x-ray unit has a step-up transformer, the 120 V input of which is transformed to the 100 kV output needed by the x-ray tube. The primary has 50 loops and draws a current of 10.00 A when in use. (a) What is the number of loops in the secondary? (b) Find the current output of the secondary.

#### Strategy and Solution for (a)

We solve VsVp\=NsNpVsVp\=NsNp for NsNs, the number of loops in the secondary, and enter the known values. This gives

Ns \= NpVsVp \= (50)100,000 V120 V\=4.17×104.Ns \= NpVsVp \= (50)100,000 V120 V\=4.17×104.

23.30

#### Discussion for (a)

A large number of loops in the secondary (compared with the primary) is required to produce such a large voltage. This would be true for neon sign transformers and those supplying high voltage inside TVs and CRTs.

#### Strategy and Solution for (b)

We can similarly find the output current of the secondary by solving IsIp\=NpNsIsIp\=NpNs for IsIs and entering known values. This gives

Is \= IpNpNs \= (10.00 A)504.17×104\=12.0 mA.Is \= IpNpNs \= (10.00 A)504.17×104\=12.0 mA.

23.31

#### Discussion for (b)

As expected, the current output is significantly less than the input. In certain spectacular demonstrations, very large voltages are used to produce long arcs, but they are relatively safe because the transformer output does not supply a large current. Note that the power input here is Pp\=IpVp\=(10.00A)(120V)\=1.20kWPp\=IpVp\=(10.00A)(120V)\=1.20kW. This equals the power output Pp\=IsVs\=(12.0mA)(100kV)\=1.20kWPp\=IsVs\=(12.0mA)(100kV)\=1.20kW, as we assumed in the derivation of the equations used.

The fact that transformers are based on Faraday’s law of induction makes it clear why we cannot use transformers to change DC voltages. If there is no change in primary voltage, there is no voltage induced in the secondary. One possibility is to connect DC to the primary coil through a switch. As the switch is opened and closed, the secondary produces a voltage like that in [Figure 23.28](23-7-transformers#import-auto-id1169737992146). This is not really a practical alternative, and AC is in common use wherever it is necessary to increase or decrease voltages.

![The first part of the figure shows a graph of DC voltage input. The graph shows a variation of voltage V p along the Y axis and time t along the X axis. The wave is a pulsed wave nearly square in nature with the vibrations only in positive half cycle. The negative half cycles are not present in the wave. The second part of the figure shows a spike wave graph. The graph shows a variation of voltage V s along the Y axis and time t along the X axis. The wave has both positive and negative half cycles shown as sharp spikes of uniform amplitude.](/apps/image-cdn/v1/f=webp/apps/archive/20260105.231123/resources/840ff62d829c305835dca0a74c4d030a769924d4)

Figure 23.28 Transformers do not work for pure DC voltage input, but if it is switched on and off as on the top graph, the output will look something like that on the bottom graph. This is not the sinusoidal AC most AC appliances need.

#### Calculating Characteristics of a Step-Down Transformer

A battery charger meant for a series connection of ten nickel-cadmium batteries (total emf of 12.5 V DC) needs to have a 15.0 V output to charge the batteries. It uses a step-down transformer with a 200-loop primary and a 120 V input. (a) How many loops should there be in the secondary coil? (b) If the charging current is 16.0 A, what is the input current?

#### Strategy and Solution for (a)

You would expect the secondary to have a small number of loops. Solving VsVp\=NsNpVsVp\=NsNp for NsNs and entering known values gives

Ns \= NpVsVp \= (200)15.0 V120 V\=25. Ns \= NpVsVp \= (200)15.0 V120 V\=25.

23.32

#### Strategy and Solution for (b)

The current input can be obtained by solving IsIp\=NpNsIsIp\=NpNs for IpIp and entering known values. This gives

Ip \= IsNsNp \= (16.0 A)25200\=2.00 A. Ip \= IsNsNp \= (16.0 A)25200\=2.00 A.

23.33

#### Discussion

The number of loops in the secondary is small, as expected for a step-down transformer. We also see that a small input current produces a larger output current in a step-down transformer. When transformers are used to operate large magnets, they sometimes have a small number of very heavy loops in the secondary. This allows the secondary to have low internal resistance and produce large currents. Note again that this solution is based on the assumption of 100% efficiency—or power out equals power in (Pp\=PsPp\=Ps)—reasonable for good transformers. In this case the primary and secondary power is 240 W. (Verify this for yourself as a consistency check.) Note that the Ni-Cd batteries need to be charged from a DC power source (as would a 12 V battery). So the AC output of the secondary coil needs to be converted into DC. This is done using something called a rectifier, which uses devices called diodes that allow only a one-way flow of current.

Transformers have many applications in electrical safety systems, which are discussed in [Electrical Safety: Systems and Devices](23-8-electrical-safety-systems-and-devices).

#### Generator

Generate electricity with a bar magnet! Discover the physics behind the phenomena by exploring magnets and how you can use them to make a bulb light.

[Click to view content](https://openstax.org/l/28gen).