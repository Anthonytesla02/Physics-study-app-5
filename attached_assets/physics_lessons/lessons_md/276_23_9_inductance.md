# 23.9 Inductance

[Original URL](https://openstax.org/books/college-physics-2e/pages/23-9-inductance)

## 23.9 Inductance

### Learning Objectives

By the end of this section, you will be able to:

*   Calculate the inductance of an inductor.
*   Calculate the energy stored in an inductor.
*   Calculate the emf generated in an inductor.

### Inductors

Induction is the process in which an emf is induced by changing magnetic flux. Many examples have been discussed so far, some more effective than others. Transformers, for example, are designed to be particularly effective at inducing a desired voltage and current with very little loss of energy to other forms. Is there a useful physical quantity related to how “effective” a given device is? The answer is yes, and that physical quantity is called inductance.

Mutual inductance is the effect of Faraday’s law of induction for one device upon another, such as the primary coil in transmitting energy to the secondary in a transformer. See [Figure 23.37](23-9-inductance#import-auto-id1169738104251), where simple coils induce emfs in one another.

![The figure shows two coils coil one, of five turns and coil two, of four turns are kept adjacent to each other. The magnetic field lines of strength B are shown to pass through the two coils. Coil one is shown to be connected to an A C source. The changing current in the coil one is given as I one in clock wise direction. Coil two is connected to a galvanometer. A change in current in coil one is shown to induce an e m f in coil two.The induced e m f in coil two is measured as a deflection in galvanometer.](/apps/image-cdn/v1/f=webp/apps/archive/20260105.231123/resources/3ad37a6d55883c7e6f83ded58e7d67f81559b062)

Figure 23.37 These coils can induce emfs in one another like an inefficient transformer. Their mutual inductance M indicates the effectiveness of the coupling between them. Here a change in current in coil 1 is seen to induce an emf in coil 2. (Note that " E 2 E 2 induced" represents the induced emf in coil 2.)

In the many cases where the geometry of the devices is fixed, flux is changed by varying current. We therefore concentrate on the rate of change of current, ΔI/ΔtΔI/Δt, as the cause of induction. A change in the current I1I1 in one device, coil 1 in the figure, induces an emf2emf2 in the other. We express this in equation form as

emf2\=−MΔI1Δt,emf2\=−MΔI1Δt,

23.34

where MM is defined to be the mutual inductance between the two devices. The minus sign is an expression of Lenz’s law. The larger the mutual inductance MM, the more effective the coupling. For example, the coils in [Figure 23.37](23-9-inductance#import-auto-id1169738104251) have a small MM compared with the transformer coils in [Figure 23.27](23-7-transformers). Units for MM are (V⋅s)/A\=Ω⋅s(V⋅s)/A\=Ω⋅s, which is named a henry (H), after Joseph Henry. That is, 1 H\=1Ω⋅s1 H\=1Ω⋅s.

Nature is symmetric here. If we change the current I2I2 in coil 2, we induce an emf1emf1 in coil 1, which is given by

emf1\=−MΔI2Δt,emf1\=−MΔI2Δt,

23.35

where MM is the same as for the reverse process. Transformers run backward with the same effectiveness, or mutual inductance MM_._

A large mutual inductance MM may or may not be desirable. We want a transformer to have a large mutual inductance. But an appliance, such as an electric clothes dryer, can induce a dangerous emf on its case if the mutual inductance between its coils and the case is large. One way to reduce mutual inductance MM is to counterwind coils to cancel the magnetic field produced. (See [Figure 23.38](23-9-inductance#import-auto-id1169737730746).)

![The figure describes the heating coils of electric clothes dryer that are counter wound on a cylindrical core. There magnetic fields cancel each other.](/apps/image-cdn/v1/f=webp/apps/archive/20260105.231123/resources/8784f4c36caf72ab524240d6490bd65091302975)

Figure 23.38 The heating coils of an electric clothes dryer can be counter-wound so that their magnetic fields cancel one another, greatly reducing the mutual inductance with the case of the dryer.

Self-inductance, the effect of Faraday’s law of induction of a device on itself, also exists. When, for example, current through a coil is increased, the magnetic field and flux also increase, inducing a counter emf, as required by Lenz’s law. Conversely, if the current is decreased, an emf is induced that opposes the decrease. Most devices have a fixed geometry, and so the change in flux is due entirely to the change in current ΔIΔI through the device. The induced emf is related to the physical geometry of the device and the rate of change of current. It is given by

emf\=−LΔIΔt,emf\=−LΔIΔt,

23.36

where LL is the self-inductance of the device. A device that exhibits significant self-inductance is called an inductor, and given the symbol in [Figure 23.39](23-9-inductance#import-auto-id1169738117225).

![Two straight lines connected by three half-circles adjacent to each other.](/apps/image-cdn/v1/f=webp/apps/archive/20260105.231123/resources/2d47cc5dedbc241537143111f881d498fbdb2ba1)

Figure 23.39

The minus sign is an expression of Lenz’s law, indicating that emf opposes the change in current. Units of self-inductance are henries (H) just as for mutual inductance. The larger the self-inductance LL of a device, the greater its opposition to any change in current through it. For example, a large coil with many turns and an iron core has a large LL and will not allow current to change quickly. To avoid this effect, a small LL must be achieved, such as by counterwinding coils as in [Figure 23.38](23-9-inductance#import-auto-id1169737730746).

A 1 H inductor is a large inductor. To illustrate this, consider a device with L\=1.0 HL\=1.0 H that has a 10 A current flowing through it. What happens if we try to shut off the current rapidly, perhaps in only 1.0 ms? An emf, given by emf\=−L(ΔI/Δt)emf\=−L(ΔI/Δt), will oppose the change. Thus an emf will be induced given by emf\=−L(ΔI/Δt)\=(1.0 H)\[(10 A)/(1.0 ms)\]\=10,000 Vemf\=−L(ΔI/Δt)\=(1.0 H)\[(10 A)/(1.0 ms)\]\=10,000 V. The positive sign means this large voltage is in the same direction as the current, opposing its decrease. Such large emfs can cause arcs, damaging switching equipment, and so it may be necessary to change current more slowly.

There are uses for such a large induced voltage. Camera flashes use a battery, two inductors that function as a transformer, and a switching system or oscillator to induce large voltages. (Remember that we need a changing magnetic field, brought about by a changing current, to induce a voltage in another coil.) The oscillator system will do this many times as the battery voltage is boosted to over one thousand volts. (You may hear the high pitched whine from the transformer as the capacitor is being charged.) A capacitor stores the high voltage for later use in powering the flash. (See [Figure 23.40](23-9-inductance#import-auto-id1169738245043).)

![The figure describes an inductor L which is connected in parallel to a capacitor C through a variable switch. There is a cell of voltage V placed parallel to the capacitor. The ends of switch can be removed from the capacitor and connected to Cell V for charging. This variable connection is shown as dashed arrows.](/apps/image-cdn/v1/f=webp/apps/archive/20260105.231123/resources/7f5d639cfb2377192159d9c4f30b3f81210a7a20)

Figure 23.40 Through rapid switching of an inductor, 1.5 V batteries can be used to induce emfs of several thousand volts. This voltage can be used to store charge in a capacitor for later use, such as in a camera flash attachment.

It is possible to calculate LL for an inductor given its geometry (size and shape) and knowing the magnetic field that it produces. This is difficult in most cases, because of the complexity of the field created. So in this text the inductance LL is usually a given quantity. One exception is the solenoid, because it has a very uniform field inside, a nearly zero field outside, and a simple shape. It is instructive to derive an equation for its inductance. We start by noting that the induced emf is given by Faraday’s law of induction as emf\=−N(ΔΦ/Δt)emf\=−N(ΔΦ/Δt) and, by the definition of self-inductance, as emf\=−L(ΔI/Δt)emf\=−L(ΔI/Δt). Equating these yields

emf\=−NΔΦΔt\=−LΔIΔt.emf\=−NΔΦΔt\=−LΔIΔt.

23.37

Solving for LL gives

L\=NΔΦΔI.L\=NΔΦΔI.

23.38

This equation for the self-inductance LL of a device is always valid. It means that self-inductance LL depends on how effective the current is in creating flux; the more effective, the greater ΔΦΔΦ/ ΔIΔI is.

Let us use this last equation to find an expression for the inductance of a solenoid. Since the area A A of a solenoid is fixed, the change in flux is Δ Φ \= Δ ( B A ) \= A Δ B Δ Φ \= Δ ( B A ) \= A Δ B . To find Δ B Δ B , we note that the magnetic field of a solenoid is given by B\=μ0nI\=μ0NIℓB\=μ0nI\=μ0NIℓ. (Here n\=N/ℓn\=N/ℓ, where N N is the number of coils and ℓ ℓ is the solenoid’s length.) Only the current changes, so that ΔΦ\=AΔB\=μ0NAΔIℓΔΦ\=AΔB\=μ0NAΔIℓ. Substituting Δ Φ Δ Φ into L\=NΔΦΔIL\=NΔΦΔI gives

L\=NΔΦΔI\=Nμ0NAΔIℓΔI.L\=NΔΦΔI\=Nμ0NAΔIℓΔI.

23.39

This simplifies to

L\=μ0N2Aℓ(solenoid).L\=μ0N2Aℓ(solenoid).

23.40

This is the self-inductance of a solenoid of cross-sectional area A A and length ℓ ℓ. Note that the inductance depends only on the physical characteristics of the solenoid, consistent with its definition.

#### Calculating the Self-inductance of a Moderate Size Solenoid

Calculate the self-inductance of a 10.0 cm long, 4.00 cm diameter solenoid that has 200 coils.

#### Strategy

This is a straightforward application of L\=μ0N2AℓL\=μ0N2Aℓ, since all quantities in the equation except LL are known.

#### Solution

Use the following expression for the self-inductance of a solenoid:

L\=μ0N2Aℓ.L\=μ0N2Aℓ.

23.41

The cross-sectional area in this example is A\=πr2\=(3.14...)(0.0200 m)2\=1.26×10−3m2A\=πr2\=(3.14...)(0.0200 m)2\=1.26×10−3m2, N N is given to be 200, and the length ℓ ℓ is 0.100 m. We know the permeability of free space is μ0\=4π×10−7T⋅m/Aμ0\=4π×10−7T⋅m/A. Substituting these into the expression for L L gives

L \= (4π×10−7 T⋅m/A)(200)2(1.26×10−3 m2)0.100 m \= 0.632 mH. L \= (4π×10−7 T⋅m/A)(200)2(1.26×10−3 m2)0.100 m \= 0.632 mH.

23.42

#### Discussion

This solenoid is moderate in size. Its inductance of nearly a millihenry is also considered moderate.

One common application of inductance is used in traffic lights that can tell when vehicles are waiting at the intersection. An electrical circuit with an inductor is placed in the road under the place a waiting car will stop over. The body of the car increases the inductance and the circuit changes sending a signal to the traffic lights to change colors. Similarly, metal detectors used for airport security employ the same technique. A coil or inductor in the metal detector frame acts as both a transmitter and a receiver. The pulsed signal in the transmitter coil induces a signal in the receiver. The self-inductance of the circuit is affected by any metal object in the path. Such detectors can be adjusted for sensitivity and also can indicate the approximate location of metal found on a person. See [Figure 23.41](23-9-inductance#import-auto-id1169738066155).

![Photograph of people around a security gate at an airport departure terminal.](/apps/image-cdn/v1/f=webp/apps/archive/20260105.231123/resources/8769241184ae6aab0a5f61b7ae8ea66cd8facf1e)

Figure 23.41 The familiar security gate at an airport can not only detect metals but also indicate their approximate height above the floor. (credit: shankar s/Flickr)

### Energy Stored in an Inductor

We know from Lenz’s law that inductances oppose changes in current. There is an alternative way to look at this opposition that is based on energy. Energy is stored in a magnetic field. It takes time to build up energy, and it also takes time to deplete energy; hence, there is an opposition to rapid change. In an inductor, the magnetic field is directly proportional to current and to the inductance of the device. It can be shown that the energy stored in an inductor EindEind is given by

Eind\=12LI2.Eind\=12LI2.

23.43

This expression is similar to that for the energy stored in a capacitor.

#### Calculating the Energy Stored in the Field of a Solenoid

How much energy is stored in the 0.632 mH inductor of the preceding example when a 30.0 A current flows through it?

#### Strategy

The energy is given by the equation Eind\=12LI2Eind\=12LI2, and all quantities except EindEind are known.

#### Solution

Substituting the value for LL found in the previous example and the given current into Eind\=12LI2Eind\=12LI2 gives

Eind \= 12LI2 \= 0.5(0.632×10−3 H)(30.0 A)2\=0.284 J. Eind \= 12LI2 \= 0.5(0.632×10−3 H)(30.0 A)2\=0.284 J.

23.44

#### Discussion

This amount of energy is certainly enough to cause a spark if the current is suddenly switched off. It cannot be built up instantaneously unless the power input is infinite.