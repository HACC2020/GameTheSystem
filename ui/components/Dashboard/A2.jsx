import React from 'react';

function A2() {
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
                <div class="flex-shrink-0 h-10 w-17">
                  <img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=60" alt="" />
                </div>
                <div class="ml-4">
                  <div class="text-sm leading-5 font-medium text-gray-900">
                    Mr. Michael Scott
                  </div>
                  <div class="text-sm leading-5 text-gray-500">
                    bestboss22@example.com
                  </div>
                </div>
              </div>
            </td>

            {/* DATE */}
            <td class="px-4 py-3 whitespace-no-wrap">
              <div class="text-sm leading-5 text-gray-900">November 15, 2020</div>
              <div class="text-sm leading-5 text-gray-500">4:30pm - 5:30pm</div>
            </td>

            {/* SPONSOR */}
            <td class="px-4 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
              Mr. Ryan Howard
            </td>

            {/* PURPOSE */}
            <td class="px-4 py-4 whitespace-wrap text-sm leading-5 font-medium">
              Routine Inspection
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
                  <img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60" alt="" />
                </div>
                <div class="ml-4">
                  <div class="text-sm leading-5 font-medium text-gray-900">
                    Mr. Wilburt Chang
                  </div>
                  <div class="text-sm leading-5 text-gray-500">
                    wilburt.chang@example.com
                  </div>
                </div>
              </div>
            </td>

            {/* DATE */}
            <td class="px-4 py-3 whitespace-no-wrap">
              <div class="text-sm leading-5 text-gray-900">November 17, 2020</div>
              <div class="text-sm leading-5 text-gray-500">2:00pm - 3:30pm</div>
            </td>

            {/* SPONSOR */}
            <td class="px-4 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
              Mr. Daniel Richardson
            </td>

            {/* PURPOSE */}
            <td class="px-4 py-4 whitespace-wrap text-sm leading-5 font-medium">
              Job Interview
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

export default A2;
