const Sidebar = () => {
  //create list of vertical  card  with Icon ANd image

  return (
    <aside className="bg-gray-200 w-1/6 min-h-screen p-4">
      <nav>
      <ul class="bg-slate-50 p-4 sm:px-8 sm:pt-6 sm:pb-8 lg:p-4 xl:px-8 xl:pt-6 xl:pb-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4 text-sm leading-6">
    <li x-for="project in projects">
      <a :href="project.url" class="hover:bg-blue-500 hover:ring-blue-500 hover:shadow-md group rounded-md p-3 bg-white ring-1 ring-slate-200 shadow-sm">
        <dl class="grid sm:block lg:grid xl:block grid-cols-2 grid-rows-2 items-center">
          <div>
            <dt class="sr-only">Title</dt>
            <dd class="group-hover:text-white font-semibold text-slate-900">
              {project.title}
            </dd>
          </div>
          <div>
            <dt class="sr-only">Category</dt>
            <dd class="group-hover:text-blue-200">{project.category}</dd>
          </div>
          <div class="col-start-2 row-start-1 row-end-3 sm:mt-4 lg:mt-0 xl:mt-4">
            <dt class="sr-only">Users</dt>
            <dd x-for="user in project.users" class="flex justify-end sm:justify-start lg:justify-end xl:justify-start -space-x-1.5">
              <img :src="user.avatar" :alt="user.name" class="w-6 h-6 rounded-full bg-slate-100 ring-2 ring-white" loading="lazy">
            </dd>
          </div>
        </dl>
      </a>
    </li>
    <li class="flex">
      <a href="/new" class="hover:border-blue-500 hover:border-solid hover:bg-white hover:text-blue-500 group w-full flex flex-col items-center justify-center rounded-md border-2 border-dashed border-slate-300 text-sm leading-6 text-slate-900 font-medium py-3">
        <svg class="group-hover:text-blue-500 mb-1 text-slate-400" width="20" height="20" fill="currentColor" aria-hidden="true">
          <path d="M10 5a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0v-3H6a1 1 0 1 1 0-2h3V6a1 1 0 0 1 1-1Z" />
        </svg>
        New project
      </a>
    </li>
  </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;