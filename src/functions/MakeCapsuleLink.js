import MakeCapsuleName from "./MakeCapsuleName";
import MakeURL from "./MakeURL";

function MakeCapsuleLink(capsule) {
	return MakeURL(MakeCapsuleName(capsule) + ' ' + capsule.system);
}

export default MakeCapsuleLink;
