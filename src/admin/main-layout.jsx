import { Outlet } from 'react-router';

export default function MainLayout() {
	return (
		<div>
			<h1>Layout Principal</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis fugit veniam nostrum ducimus eligendi ratione deserunt sequi facilis nobis, culpa, doloremque dolores accusantium quaerat maiores necessitatibus iure explicabo omnis quidem!</p>
            <Outlet />
		</div>
	);
}
