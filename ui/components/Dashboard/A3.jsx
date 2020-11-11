import React from 'react';

function A3() {
  return (
    <div className="transition-shadow duration-300 ease-in-out hover:shadow bg-white shadow-lg rounded-lg border border-solid border-gray-400 p-2 overflow-x-auto">
      <table class="min-w-full divide-y divide-gray-200">
        <thead>
          <tr>
            <th class="px-4 py-2 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Name</th>
            <th class="px-4 py-2 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Time</th>
            <th class="px-4 py-2 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Sponsor</th>
            <th class="px-4 py-2 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Purpose</th>
            <th class="px-4 py-2 bg-gray-50"></th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">

          <tr>
            {/* NAME */}
            <td class="px-4 py-3 whitespace-no-wrap">
              <div class="flex items-center">
                <div class="flex-shrink-0 h-10 w-10">
                  <img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60" alt="" />
                </div>
                <div class="ml-4">
                  <div class="text-sm leading-5 font-medium text-gray-900">
                    Mr. Toby Flenderson
                  </div>
                  <div class="text-sm leading-5 text-gray-500">
                    toby@example.com
                  </div>
                </div>
              </div>
            </td>

            {/* DATE */}
            <td class="px-4 py-3 whitespace-no-wrap">
              <div class="text-sm leading-5 text-gray-900">November 11, 2020</div>
              <div class="text-sm leading-5 text-gray-500">5:30pm - 8:30pm</div>
            </td>

            {/* SPONSOR */}
            <td class="px-4 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
              Mr. David Wallace
            </td>

            {/* PURPOSE */}
            <td class="px-4 py-4 whitespace-wrap text-sm leading-5 font-medium">
              5G upgrade!
            </td>

            {/* EDIT */}
            <td class="px-4 py-4 whitespace-no-wrap text-sm leading-5 font-medium">
              <a href="#" class="text-indigo-600 hover:text-indigo-900">Edit</a>
            </td>
          </tr>

          <tr>
            {/* NAME */}
            <td class="px-4 py-3 whitespace-no-wrap">
              <div class="flex items-center">
                <div class="flex-shrink-0 h-10 w-10">
                  <img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1498551172505-8ee7ad69f235?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60" alt="" />
                </div>
                <div class="ml-4">
                  <div class="text-sm leading-5 font-medium text-gray-900">
                    Mr. Paul Blart
                  </div>
                  <div class="text-sm leading-5 text-gray-500">
                    mall_cop_22@example.com
                  </div>
                </div>
              </div>
            </td>

            {/* DATE */}
            <td class="px-4 py-3 whitespace-no-wrap">
              <div class="text-sm leading-5 text-gray-900">November 11, 2020</div>
              <div class="text-sm leading-5 text-gray-500">5:30pm - 8:30pm</div>
            </td>

            {/* SPONSOR */}
            <td class="px-4 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
              Mr. Stanley Hudson
            </td>

            {/* PURPOSE */}
            <td class="px-4 py-4 whitespace-wrap text-sm leading-5 font-medium">
              Pretzel Day
            </td>

            {/* EDIT */}
            <td class="px-4 py-4 whitespace-no-wrap text-sm leading-5 font-medium">
              <a href="#" class="text-indigo-600 hover:text-indigo-900">Edit</a>
            </td>
          </tr>

          <tr>
            {/* NAME */}
            <td class="px-4 py-3 whitespace-no-wrap">
              <div class="flex items-center">
                <div class="flex-shrink-0 h-10 w-10">
                  <img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=60" alt="" />
                </div>
                <div class="ml-4">
                  <div class="text-sm leading-5 font-medium text-gray-900">
                    Mr. Andy Bernard
                  </div>
                  <div class="text-sm leading-5 text-gray-500">
                    cornell_225@example.com
                  </div>
                </div>
              </div>
            </td>

            {/* DATE */}
            <td class="px-4 py-3 whitespace-no-wrap">
              <div class="text-sm leading-5 text-gray-900">November 11, 2020</div>
              <div class="text-sm leading-5 text-gray-500">5:30pm - 8:30pm</div>
            </td>

            {/* SPONSOR */}
            <td class="px-4 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
              Mr. Bob Vance (of Vance Refrigeration)
            </td>

            {/* PURPOSE */}
            <td class="px-4 py-4 whitespace-wrap text-sm leading-5 font-medium">
              Talk about Phyllis
            </td>

            {/* EDIT */}
            <td class="px-4 py-4 whitespace-no-wrap text-sm leading-5 font-medium">
              <a href="#" class="text-indigo-600 hover:text-indigo-900">Edit</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default A3;
